import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FILTER, Context } from '../../context';
import SC from './style';

const Filter = () => {
  const { filterTodos } = useContext(Context);

  const handleChange = (e) => {
    filterTodos(e.target.value);
  };

  return <>
    <FontAwesomeIcon icon={faFilter} />
    <SC.Filter onChange={handleChange}>
      <option value={FILTER.ALL}>All</option>
      <option value={FILTER.ACTIVE}>Active</option>
      <option value={FILTER.COMPLETED}>Completed</option>
    </SC.Filter>
  </>;
}

export default Filter;