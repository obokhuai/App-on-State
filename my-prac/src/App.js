import React from 'react'
import {useState} from "react";

function App() {
  const [name, setName] = useState("");

  const handleClick=(e)=>{
    setName(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleClick}/>
      <div>my name is {name}</div>
    </div>
  )
}

export default App