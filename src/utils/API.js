import axios from 'axios';
const URL = 
'https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob';

export default {
  getEmployees: function() {
    return axios.get(URL);
  }
};
