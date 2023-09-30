const reducer=(state,action)=>{

    switch (action.type) {
        case"ADD_TODO":
             return {
            ...state,
           todos : [...state.todos, {id:Date.now(),text: action.payload,completed:false} ],
           newTodo:""
        } 
        case"CHANGE":
        return {
            ...state,
            newTodo : action.payload 
         } 
        case"DELETE_TODO":
        const ubdateTodos=state.todos.filter((todo)=>todo.id!==action.payload);
        return {
            ...state,
           todos: ubdateTodos
        }
        case"CHECK":
        return {
            ...state,
           todos: state.todos.map(todo=> todo.id===action.payload?{...todo,completed:!todo.completed}:todo
           )
        }
        case"DELETE_DETAIL":
        const ubdateDetails=state.details.filter((detail)=>detail.id!==action.payload);
        return {
            ...state,
           detail: ubdateDetails
        }
        case"DETAIL_CHECK":
        return {
            ...state,
           details: state.details.map(detail=> detail.id===action.payload?{...detail,completed:!detail.completed}:detail
           )
        }
        default:
            return state;
    }
   
};

export default reducer