import createDataContext from './createDataContext'
import fetchList from '../api/fetchList';

const ACTIONS = {
  FETCH: 'fetch',
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
  FILTER: 'filter'
};

function* IdGenerator() {
  let index = 11;

  while (true) {
    yield index++;
  }
}

const generateId = IdGenerator();

export const FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH:
      return action.payload;
    case ACTIONS.ADD:
      return {...state, data: [...state.data, action.payload]};
    case ACTIONS.EDIT:
      return {...state, data: state.data.map(i => i.id === action.payload.id ? {
        ...i,
        ...action.payload
      } : i)};
    case ACTIONS.DELETE:
      return {...state, data: state.data.filter(i => i.id !== action.payload) };
    case ACTIONS.FILTER:
      return {...state, filter: action.payload};
    default: return state;
  }
}

const filterTodos = dispatch => filter => {
  dispatch({ type: ACTIONS.FILTER, payload: filter })
}

const fetchTodos = dispatch => async () => {
  const data = await fetchList();
  dispatch({ type: ACTIONS.FETCH, payload: {data, filter: FILTER.ALL} })
}

const addTodo = dispatch => title => {
  dispatch({ type: ACTIONS.ADD, payload: {id: generateId.next().value, title, completed: false} })
}

const editTodo = dispatch => (id, title, completed) => {
  dispatch({ type: ACTIONS.EDIT, payload: {id, title, completed} })
}

const deleteTodo = dispatch => id => {
  dispatch({ type: ACTIONS.DELETE, payload: id })
}

export const {Context, Provider} = createDataContext(
  todoReducer,
  {
    fetchTodos,
    addTodo,
    editTodo,
    deleteTodo,
    filterTodos
  },
  []
);