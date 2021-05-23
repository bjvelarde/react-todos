import React, { useContext, useEffect } from 'react';
import { Context } from '../../context';
import ToDoItem from '../ToDoItem'
import SC from './style';

const TodoList = () => {
  const { state, fetchTodos } = useContext(Context);

  useEffect(async () => {
    await fetchTodos();
  }, []);

  return <SC.ListContainer>
    {state.data ? (
      state.filter === 'all' ? (
        state.data.map(i => <ToDoItem item={i} />)
      ) : (
        state.data.filter(i => i.completed === (state.filter === 'completed')).map(i => <ToDoItem item={i} />)
      )
    ) : <div>Loading...</div> }
  </SC.ListContainer>;
}

export default TodoList;