import { useState } from "react";

function AddTaskForm({ addTask }) {
    const [task, setTask] = useState('');
    return(
        <div>
            <input className='taskInput' placeholder="Add task" onChange={(e) => setTask(e.target.value)}/>
            <button onClick={() => addTask(task)}>Add</button>
        </div>
    )
};

export default AddTaskForm;