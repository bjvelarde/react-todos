import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FILTER, Context } from '../../context';
import SC from './style';

const Filter = () => {
  const { filterTodos } = useContext(Context);

  return <>
    <FontAwesomeIcon icon={faFilter} />
    <SC.Filter onChange={(e) => {
      console.log(e.target.value);
      filterTodos(e.target.value);
    }}>
      <option value={FILTER.ALL}>All</option>
      <option value={FILTER.ACTIVE}>Active</option>
      <option value={FILTER.COMPLETED}>Completed</option>
    </SC.Filter>
  </>;
}

export default Filter;