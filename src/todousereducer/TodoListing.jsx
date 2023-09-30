import React from 'react'

const TodoListing = ({todos,dispatch}) => {
  return (
    <>
    <ul style={{display:"flex",flexDirection:"column-reverse"}}>
        {todos.map((todo, index) => (
         todo.completed===false&& <li key={index}>
            <input onChange={()=>dispatch({type:"CHECK",payload:todo.id})} type='checkbox' checked={todo.completed}/> {todo.text}{" "}
            <button onClick={()=>dispatch({type:"ACTİVE_TODO",payload:{id:todo.id,text:todo.text}})}>Detail</button>
            <button onClick={() => { dispatch({ type: "DELETE_TODO", payload: todo.id }); }} >sil</button>

          </li>
        ))}
        
      </ul>
      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
         {todos.map((todo, index) => (
          todo.completed===true&& <li key={index}>
            <input onChange={()=>dispatch({type:"CHECK",payload:todo.id})} type='checkbox' checked={todo.completed}/> {todo.text}{" "}
            <button onClick={()=>dispatch({type:"ACTİVE_TODO",payload:{id:todo.id,text:todo.text}})}>Detail</button>
            <button onClick={() => { dispatch({ type: "DELETE_TODO", payload: todo.id }); }} >sil</button>
          
          </li>
        ))}
      </ul>
</>
  )
}

export default TodoListing