import React, { useReducer } from 'react'

const TodoReducer = () => {

    const initialState={
        todos:[
            {text:"todo1"},
            {text:"todo2"},
            {text:"todo3"}
             ],
        newTodo:""
};

    const reducer=(state,action)=>{
        if(action.type==="ADD_TODO")
        {
            return {
               todos : [...state.todos, {text: action.payload} ]
            } 
        }
        else if(action.type==="CHANGE")
        {
            return {
                ...state,
                newTodo : action.payload 
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
            <li key={index}>{todo.text}</li>)}
        </ul>
    </div>
  )
}

export default TodoReducer