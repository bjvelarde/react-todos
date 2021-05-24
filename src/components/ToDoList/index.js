import React, { useContext, useEffect } from 'react';
import { FILTER, Context } from '../../context';
import ToDoItem from '../ToDoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';
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
        state.data.filter(i => i.completed === (state.filter === FILTER.COMPLETED)).map(i => <ToDoItem item={i} />)
      )
    ) : <FontAwesomeIcon icon={faYinYang} spin size="3x" color="#1a425e"/> }
  </SC.ListContainer>;
}

export default TodoList;