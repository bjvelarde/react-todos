import React, { useContext, useState, useRef } from 'react';
import { Context } from '../../context';
import SC from './style';

const NewToDo = () => {
  const { addTodo } = useContext(Context);
  const [dirty, setDirty] = useState('');
  const inputEl = useRef(null);

  return <SC.Container>
    <SC.PlusIcon dirty={dirty} onClick={() => {
      if (dirty) {
        addTodo(inputEl.current.value);
        setDirty(false);
        inputEl.current.value = '';
      }
    }}/>
    <SC.InputBox>
      <SC.Input ref={inputEl} name="new-todo" placeholder="New To Do Item" onChange={(e) => {
        setDirty(e.target.value.trim() !== '');
      }}/>
    </SC.InputBox>
  </SC.Container>;
}

export default NewToDo;