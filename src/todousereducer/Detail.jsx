import React from 'react'
import AddDetail from './AddDetail';

const Detail = ({state,dispatch}) => {
    const details=state.details.filter((detail)=>detail.todoId===state.activeTodo.todoId);
    const activeTodo=state.activeTodo;
    return (
      <div id='detail-container'>
      <br/>
            <button onClick={()=>dispatch({type:"ACTİVE_TODO",payload:{id:0,text:""}})}>close</button>
      <br/>
      <h2>{activeTodo.activeTodoText}</h2>
      <AddDetail state={state} dispatch={dispatch}/>
      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
          {details.map((detail, index) => (
           detail.completed===false&& <li key={index}>
              <input onChange={()=>dispatch({type:"DETAIL_CHECK",payload:detail.id})} type='checkbox' checked={detail.completed}/>
              <input onClick={(e)=>e.target.value=e.target.placeholder} placeholder={detail.text} onChange={(e)=>dispatch({type:"UBDATE_CHANGE",payload:e.target.value})} type='text' onBlur={() =>dispatch({ type: "UBDATE_TODO", payload: {id:detail.id,text:state.ubdateTodo} })} /> 
              <button onClick={() => { dispatch({ type: "DELETE_DETAIL", payload: detail.id }); }} >sil</button>
            </li>
          ))}
          
        </ul>
        <hr/>
       <ul style={{display:"flex",flexDirection:"column-reverse"}}>
          {details.map((detail, index) => (
           detail.completed===true&& <li key={index}>
              <input onChange={()=>dispatch({type:"DETAIL_CHECK",payload:detail.id})} type='checkbox' checked={detail.completed}/>
              <input onClick={(e)=>e.target.value=e.target.placeholder} placeholder={detail.text} onChange={(e)=>dispatch({type:"UBDATE_CHANGE",payload:e.target.value})} type='text' onBlur={() =>dispatch({ type: "UBDATE_TODO", payload: {id:detail.id,text:state.ubdateTodo} })} /> 
              <button onClick={() => { dispatch({ type: "DELETE_DETAIL", payload: detail.id }); }} >sil</button>
            </li>
          ))}
          
        </ul>
  </div>
    )
  }

export default Detail