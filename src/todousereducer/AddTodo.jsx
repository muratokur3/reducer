import React from 'react'

const AddTodo = ({state,dispatch}) => {
  return (
    <>
     <input value={state.newTodo} onChange={(e) => dispatch({ type: "CHANGE", payload: e.target.value })}type="text"></input>
      <button onClick={() => dispatch({ type: "ADD_TODO", payload: state.newTodo })}>Add</button>
    </>
  )
}

export default AddTodo