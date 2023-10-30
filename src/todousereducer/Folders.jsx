import React from 'react'

const Folders = ({folders}) => {
  return (
    <div id='folders-container'>
        {folders.map((folder)=>
        <button>{folder.name}</button>
        )}
        
    </div>
  )
}

export default Folders