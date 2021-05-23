import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin: 20px auto;
  border: 1px solid #aaa;
  padding: 10px 20px;
  text-align: left;
  max-width: 600px;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 500px;
`;

const InputBox = styled.div`
  display: inline-block;
  padding-left: 15px;
`;

const PlusIcon = styled(FontAwesomeIcon).attrs({
  icon: faPlus,
  title: 'Add New Item'
})`
  float: left;
  color: ${props => (props.dirty ? 'green' : 'grey')};

  &:hover {
    color: green;
    cursor: pointer;
  }
`;

export default {
  Container,
  Input,
  InputBox,
  PlusIcon
};