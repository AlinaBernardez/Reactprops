import { useEffect } from "react";


function Task({ task, deleteTask, changeCompleted }) {
    return (
        <div key={task.id} className='card'>
            <h2 onClick={() => changeCompleted(task.id)} style={ task.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{task.text}</h2>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
};

export default Task;