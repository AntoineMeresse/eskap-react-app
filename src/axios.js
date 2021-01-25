import axios from 'axios';

const instance = axios.create(
  {
      baseURL : 'https://eskaps.herokuapp.com'
  }  
);

export default instance;