import React, { useReducer } from "react";
import reducer from "./Reducer";
import initialState from "./InitialState";
import TodoListing from "./TodoListing";
import AddTodo from "./AddTodo";
import Detail from "./Detail";

const TodoReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{width:"100%", display:"flex",flexDirection:"column",alignItems:"center"}}>
     <AddTodo  state={state} dispatch={dispatch}/>
      <TodoListing todos={state.todos} dispatch={dispatch}/>
      <hr/>
      <Detail details={state.details} dispatch={dispatch}/>
    </div>
  );
};

export default TodoReducer;
