import axios from 'axios'  
  
const SERVER_URL = 'http://restapinotetaker-env.eba-pjrszvn9.us-east-1.elasticbeanstalk.com:5000/notes';  
  
const instance = axios.create({  
  baseURL: SERVER_URL,  
  timeout: 1000  
});  
  
export default {  
  // (C)reate  
  createNew: (text, completed) => instance.post('add', {title: text, message: completed}),  
  // (R)ead  
  getAll: () => instance.get('notes', {  
    transformResponse: [function (data) {  
      return data? JSON.parse(data)._embedded.todos : data;  
    }]  
  }),  
  // (U)pdate  
  updateForId: (id, text, completed) => instance.put('todos='+id, {title: text, completed: completed}),  
  // (D)elete  
  removeForId: (id) => instance.delete('delete='+id)  
}