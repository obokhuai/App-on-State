import React from 'react'

function Task(props) {
  return (
    <div>
       <div key={props.id}>
            <h1>{props.itemName}</h1>
            <button onClick={() => deleteTask(props.id)}>X</button>
          </div>
    </div>
  )
}

export default Task