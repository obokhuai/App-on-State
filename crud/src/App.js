import React, { useState } from 'react';
import './app.css';
import Task from './Task';

function App() {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      itemName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleOnChange} value={newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
       <Task taskName ={task.taskName} id = {task.id}/>
      </div>
    </div>
  );
}

export default App;