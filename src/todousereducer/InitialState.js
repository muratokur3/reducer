import axios from 'axios';

const getTodos= async()=>{
  const response=await axios.get("http://localhost:5005/todos")
    return response.data
  }

const initialState = {
  todos: getTodos,
  newTodo: "",
  ubdateTodo:"",
  details: [
    { id: 1, todoId: 1, text: "Önce ilaç iç", completed: false,},
    { id: 2, todoId: 1, text: "Bitki çayı unutma", completed: false,},
    { id: 3, todoId: 1, text: "Minimum tuz", completed: true,},
    { id: 4, todoId: 2, text: "Spor esnasında 3L su iç", completed: false },
    { id: 5, todoId: 2, text: "Spordan sonra mutlaka Soğuk duş", completed: true },
    { id: 6, todoId: 3, text: "Projeyi baştan aşağı oku", completed: true },
    { id: 7, todoId: 3, text: "Kod tekrarından kaçın", completed: true },
    { id: 8, todoId: 3, text: "Yeni bir özellik öğren ve ekle", completed: false },
    { id: 9, todoId: 3, text: "GitHub'a Commitle", completed: false },
  ],
  newDetail: "",
  activeTodo: {
    todoId:0,
    activeTodoText:"",
    isActive: false,
  },
};


  








export default initialState;
