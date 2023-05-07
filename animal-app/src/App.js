import "./App.css";
import React from 'react'
import AnimalShow from './AnimalShow'
import { useState } from 'react'

const getAnimalAtRandom = () =>{
  const animal = ["bird", "cat", "cow", "dog", "gator", "horse", ]
  return animal[Math.floor(Math.random()*animal.length)]
}

function App() {
  const [animals, setAnimals] = useState([]);
const handleClick = () =>{
  setAnimals([...animals, getAnimalAtRandom()]);
}

const animalRendering = animals.map((animal,index)=>{
 return <AnimalShow type={animal} key={index}/>
})

  return (
    <div className="App">
       <button onClick={handleClick}>Add Animal</button>
       <div>{animalRendering}</div>
    </div>
  )
}

export default App