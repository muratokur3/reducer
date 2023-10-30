import axios from 'axios';

const getTodos= async()=>{
  const response=await axios.get("http://localhost:5005/todos")
    initialState.todos= response.data
  };
  const getDetails= async()=>{
    const response=await axios.get("http://localhost:5005/details")
      initialState.details= response.data
    };
    const getFolders= async()=>{
      const response=await axios.get("http://localhost:5005/folders")
        initialState.folders= response.data
      };  

  getTodos();
  getDetails();
  getFolders();
  
const initialState = {
  todos: [],
  newTodo: "",
  ubdateTodo:"",
  details: [],
  newDetail: "",
  activeTodo: {
       todoId:0,
       activeTodoText:"",
       isActive: false,
  },
  folders:[]
};



export default initialState;
