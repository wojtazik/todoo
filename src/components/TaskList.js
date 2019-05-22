import * as React from 'react'
import Task from './Task'
import '../App.css'


const TaskList = ({tasks}) => {
    return (
        <ul  id='tasks-list' data-testid="test-task-list" className='task-list' >
            {tasks.map(task => (
               <Task task={task} key={task.id}/>
            ))}
        </ul>
    )
}
export default TaskList