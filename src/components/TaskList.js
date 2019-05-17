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


const TaskList = ({tasks, taskDelete, setDone}) => {
    return (
        <ul  id='tasks-list' style={styles.ul}>
            {tasks.map(task => (
               <Task task={task} setDone={setDone} taskDelete={taskDelete} key={task.id}/>
            ))}
        </ul>
    )
}
export default TaskList