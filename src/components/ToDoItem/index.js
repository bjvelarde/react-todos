import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Context } from '../../context';
import SC from './style';

const ToDoItem = ({item}) => {
  const { editTodo, deleteTodo } = useContext(Context);
  const icon = item.completed ? faCheckCircle : faCircle;
  const color = item.completed ? 'green' : 'blue';

  return (
    <SC.ItemBox key={item.id}>
      <FontAwesomeIcon icon={icon} color={color} onClick={() => {
        editTodo(item.id, item.title, !item.completed);
      }}/>
      <SC.ListItem>
        <SC.Input onChange={(e) => {
          editTodo(item.id, e.target.value, item.completed);
        }} defaultValue={item.title} />
      </SC.ListItem>
      <SC.DeleteIcon icon={faTrashAlt} onClick={() => {
        deleteTodo(item.id);
      }}/>
    </SC.ItemBox>
  );
};

export default ToDoItem;