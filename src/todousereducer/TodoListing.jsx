import React from 'react'

const TodoListing = ({state,todos,dispatch}) => {
  return (
    <div id='todo-listing'>
    <ul style={{display:"flex",flexDirection:"column-reverse"}}>
        {todos.map((todo, index) => (
         todo.completed===false&& <li key={index}>
            <input onChange={()=>dispatch({type:"CHECK",payload:todo.id})} type='checkbox' checked={todo.completed}/>         
            <input onClick={(e)=>e.target.value=e.target.placeholder} placeholder={todo.text} onChange={(e)=>dispatch({type:"UBDATE_CHANGE",payload:e.target.value})} type='text' onBlur={() =>dispatch({ type: "UBDATE_TODO", payload: {id:todo.id,text:state.ubdateTodo} })} /> 
       <button onClick={()=>dispatch({type:"ACTİVE_TODO",payload:{id:todo.id,text:todo.text}})}>Detail</button>
            <button onClick={() => { dispatch({ type: "DELETE_TODO", payload: todo.id }); }} >sil</button>
          </li>
        ))}
      </ul>
      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
         {todos.map((todo, index) => (
          todo.completed===true&& <li key={index}>
            <input onChange={()=>dispatch({type:"CHECK",payload:todo.id})} type='checkbox' checked={todo.completed}/>
            <input onClick={(e)=>e.target.value=e.target.placeholder} placeholder={todo.text} onChange={(e)=>dispatch({type:"UBDATE_CHANGE",payload:e.target.value})} type='text' onBlur={() =>dispatch({ type: "UBDATE_TODO", payload: {id:todo.id,text:state.ubdateTodo} })} /> 
            <button onClick={()=>dispatch({type:"ACTİVE_TODO",payload:{id:todo.id,text:todo.text}})}>Detail</button>
            <button onClick={() => { dispatch({ type: "DELETE_TODO", payload: todo.id }); }} >sil</button>
          
          </li>
        ))}
      </ul>
</div>
  )
}

export default TodoListing