import { useState } from 'react';
import './App.css'
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';


let exampleTasks = [
  { id: 1, text: 'Hacer la compra', completed: false },
  { id: 2, text: 'Llamar al médico', completed: true },
  { id: 3, text: 'Hacer ejercicio', completed: false }
]

const App = () => {
  const [tasks, setTasks] = useState(exampleTasks);

  const addTask = (text) => {
    setTasks([...tasks, {id: text + (tasks.length + 1), text, completed: false}])
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  };

  const changeCompleted = (taskId) => {
    // let index = tasks.findIndex(task => task.id === taskId)
    // tasks[index].completed = !tasks[index].completed
    // setTasks([...tasks])
    setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task))
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
