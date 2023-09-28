import React, { useReducer } from 'react'

const TodoReducer2 = () => {
    
    const initialState={
        todos:[
            {id:1,text:"todo1"},
            {id:2,text:"todo2"},
            {id:3,text:"todo3"}
             ],
        newTodo:""
};

    const reducer=(state,action)=>{
        if(action.type==="ADD_TODO")
        {
            return {
                ...state,
               todos : [...state.todos, {id:state.todos.length+1,text: action.payload} ],
               newTodo:""
            } 
        }
        else if(action.type==="CHANGE")
        {
            return {
                ...state,
                newTodo : action.payload 
             } 
        }
        else if (action.type==="DELETE_TODO") {
            const ubdateTodos=state.todos.filter((todo)=>todo.id!==action.payload);
            return {
                ...state,
               todos: ubdateTodos
            }
        }
        else return state;
    };

    const [state,dispatch]=useReducer(reducer,initialState);

  return (
    <div>
        
        <input value={state.newTodo} onChange={(e)=>dispatch({type:"CHANGE",payload:e.target.value})} type='text'></input>
        <button onClick={()=>dispatch({type:"ADD_TODO",payload:state.newTodo})}>Add</button>
        <ul>
            {state.todos.map((todo,index)=>
            <li key={index}>{todo.id}-{todo.text}  <button onClick={()=>{dispatch({type:"DELETE_TODO",payload:todo.id})}}>sil</button></li>
            
            )}
        </ul>
    </div>
  )
}

export default TodoReducer2