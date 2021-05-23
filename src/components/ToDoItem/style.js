import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = styled.input`
  border: none;
  outline: none;
  width: 500px;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  float: right;
  color: red;
`;

const ListItem = styled.div`
  display: inline-block;
  padding-left: 15px;
`;

const ItemBox = styled.div`
  border: 1px solid #dfdfdf;
  margin: 5px auto;
  color: #191970;
  padding: 10px 20px;
  text-align: left;
  max-width: 600px;
  border-radius: 20px;

  &:hover {
    box-shadow: 10px 5px 5px #cfcfcf;
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }
`;

export default {
  ListItem,
  ItemBox,
  DeleteIcon,
  Input
};