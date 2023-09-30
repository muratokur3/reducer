import React from 'react'

const Detail = ({details,dispatch}) => {
    return (
      <>
      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
          {details.map((detail, index) => (
           detail.completed===false&& <li key={index}>
              <input onChange={()=>dispatch({type:"DETAIL_CHECK",payload:detail.id})} type='checkbox' checked={detail.completed}/> {detail.text}{" "}
              <button onClick={() => { dispatch({ type: "DELETE_DETAIL", payload: detail.id }); }} >sil</button>
            </li>
          ))}
          
        </ul>
        <ul style={{display:"flex",flexDirection:"column-reverse"}}>
          {details.map((detail, index) => (
           detail.completed===true&& <li key={index}>
              <input onChange={()=>dispatch({type:"DETAIL_CHECK",payload:detail.id})} type='checkbox' checked={detail.completed}/> {detail.text}{" "}
              <button onClick={() => { dispatch({ type: "DELETE_DETAIL", payload: detail.id }); }} >sil</button>
            </li>
          ))}
          
        </ul>
  </>
    )
  }

export default Detail