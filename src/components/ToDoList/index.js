import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../context';
import SC from './style';

const TodoList = () => {
  const { state, fetchTodos, editTodo, deleteTodo } = useContext(Context);

  useEffect(async () => {
    await fetchTodos();
  }, []);

  return <SC.ListContainer>
    {state.data ? (
      state.filter === 'all' ? (
        state.data.map(i => {
          const icon = i.completed ? faCheckCircle : faCircle;
          const color = i.completed ? 'green' : 'blue';
          return (
            <SC.ItemBox key={i.id}>
              <FontAwesomeIcon icon={icon} color={color} onClick={() => {
                editTodo(i.id, i.title, !i.completed);
              }}/>
              <SC.ListItem>
                <SC.Input onChange={(e) => {
                  editTodo(i.id, e.target.value, i.completed);
                }} defaultValue={i.title} />
              </SC.ListItem>
              <SC.DeleteIcon icon={faTrashAlt} onClick={() => {
                deleteTodo(i.id);
              }}/>
            </SC.ItemBox>
          );
        })
      ) : (
        state.data.filter(i => i.completed === (state.filter === 'completed')).map(i => {
          const icon = i.completed ? faCheckCircle : faCircle;
          const color = i.completed ? 'green' : 'blue';
          return (
            <SC.ItemBox key={i.id}>
              <FontAwesomeIcon icon={icon} color={color} onClick={() => {
                editTodo(i.id, i.title, !i.completed);
              }}/>
              <SC.ListItem>
                <SC.Input onChange={(e) => {
                  editTodo(i.id, e.target.value, i.completed);
                }} defaultValue={i.title} />
              </SC.ListItem>
              <SC.DeleteIcon icon={faTrashAlt} onClick={() => {
                deleteTodo(i.id);
              }}/>
            </SC.ItemBox>
          );
        })
      )

    ) : <div>Loading...</div> }
  </SC.ListContainer>;
}

export default TodoList;