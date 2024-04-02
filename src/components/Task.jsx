
function Task({ task, deleteTask, changeCompleted }) {
    return (
        <div key={task.id} className='card'>
            <h2
            onClick={() => changeCompleted(task.id)}
            style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
            >
            {task.text}
            </h2>
            <button type='button' onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    )
};

export default Task;