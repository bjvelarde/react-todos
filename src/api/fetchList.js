import axios from 'axios';

const fetchList = async () => {
  const {REACT_APP_LIST_URL: listUrl} = process.env;
  const response = await axios.get(listUrl);
  return response.data.slice(0, 10);
}

export default fetchList;