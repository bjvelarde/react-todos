import React, { useContext, useState, useRef } from 'react';
import { Context } from '../../context';
import SC from './style';

const NewToDo = () => {
  const { addTodo } = useContext(Context);
  const [dirty, setDirty] = useState(false);
  const inputEl = useRef(null);

  const handleClick = () => {
    if (dirty) {
      addTodo(inputEl.current.value);
      setDirty(false);
      inputEl.current.value = '';
    }
  };

  const handleChange = (e) => {
    setDirty(e.target.value.trim() !== '');
  };

  return <SC.Container>
    <SC.PlusIcon dirty={dirty} onClick={handleClick}/>
    <SC.InputBox>
      <SC.Input ref={inputEl} name="new-todo" placeholder="New To Do Item" onChange={handleChange}/>
    </SC.InputBox>
  </SC.Container>;
}

export default NewToDo;