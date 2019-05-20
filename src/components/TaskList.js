import * as React from 'react'
import Task from './Task'
import '../App.css'

const styles = {
    ul:{
        border: '1ps solid white',
        backgroundColor: '#222c34',
        listStyleType: 'none',
        overflow: 'scroll',
        maxHeight: '670px',
        borderRadius: '30px',
    }
}

const TaskList = ({tasks}) => {
    console.log(tasks)
    return (
        <ul  id='tasks-list' style={styles.ul}>
            {tasks.map(task => (
               <Task task={task} key={task.id}/>
            ))}
        </ul>
    )
}
export default TaskList