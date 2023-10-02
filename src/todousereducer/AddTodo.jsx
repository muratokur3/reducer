import React from 'react'

const AddTodo = ({state,dispatch}) => {
  return (
    <form onSubmit={(e) => {e.preventDefault();dispatch({ type: "ADD_TODO", payload: state.newTodo })}}>
     <input value={state.newTodo} onChange={(e) => dispatch({ type: "CHANGE", payload: e.target.value })}type="text" required />
      <button type='submit' >Add</button>
    </form>
  )
}

export default AddTodo