import { useState } from 'react';
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import { useEffect } from 'react';

let exampleTasks = [
  { id: 1, text: 'Hacer la compra', completed: false },
  { id: 2, text: 'Llamar al médico', completed: true },
  { id: 3, text: 'Hacer ejercicio', completed: false }
]

const App = () => {
  const [tasks, setTasks] = useState(exampleTasks);

  const addTask = (text) => {
    setTasks([...tasks, {id: (tasks.length + 1), text, completed: false}])
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  };

  const changeCompleted = (taskId) => {
    tasks[taskId - 1].completed = !tasks[taskId - 1].completed
    setTasks([...tasks])
  };

  const renderTasks = () => {
    return tasks.map(task => (
      <Task key={task.id} task={task} deleteTask={deleteTask} changeCompleted={changeCompleted}/>
    ))
  };

  return (
    <>
      <h1>Your tasks:</h1>
      <AddTaskForm addTask={addTask}/>
      <div className='cardContainer'>
        {renderTasks()}
      </div>
    </>
  );
};

export default App;
