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
         case"UBDATE_CHANGE":
        return {
            ...state,
            ubdateTodo : action.payload 
         } 
         case"UBDATE_TODO":
             return {
            ...state,
           todos :  state.todos.map(todo=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo),
           ubdateTodo:""
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
        case"ADD_DETAİL":
             return {
            ...state,
           details : [...state.details, {id:Date.now(),todoId:action.payload.todoId,text: action.payload.text,completed:false} ],
           newDetail:""
        } 
        case"CHANGE_DETAİL":
        return {
            ...state,
            newDetail : action.payload 
         } 
        case"DELETE_DETAIL":
        return {
            ...state,
           details: state.details.filter((detail)=>detail.id!==action.payload)
        }
        case"DETAIL_CHECK":
        return {
            ...state,
           details: state.details.map(detail=> detail.id===action.payload?{...detail,completed:!detail.completed}:detail
           )
        }
        case "ACTİVE_TODO":
            return{
                ...state,
                activeTodo:{todoId:action.payload.id,activeTodoText:action.payload.text,isActive:!state.activeTodo.isActive}
            }
        default:
            return state;
    }
   
};

export default reducer