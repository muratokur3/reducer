import React from 'react'

const AddDetail = ({state,dispatch}) => {
  return (
         <>
           <input value={state.newDetail} onChange={(e) => dispatch({ type: "CHANGE_DETAİL", payload: e.target.value })}type="text"></input>
           <button onClick={(e) => dispatch({ type: "ADD_DETAİL", payload:{ todoId:state.activeTodo.todoId,text:state.newDetail}})}>Add</button>
         </>
  )
}

export default AddDetail