import * as React from 'react'
import { Button } from 'react-bootstrap'
import countReducer from '../components/exampleReducer'

const Task = ({task, taskDelete, setDone}) => {

    const styles = {
        h4: {
            color: task.completed ? 'green' : 'red',
            fontSize: '18px',
            wordWrap: 'break-word'
        },
        li: {
          border: '1px solid white',
            padding: '10px'
        },
        p: {
          color: 'white'
        },
        divRow: {
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },
        marginRight: {
          marginRight: '10px'
        }
    }

    const [time, dispatch ] = React.useReducer(countReducer, new Date().getHours())


    return (
        <li style={styles.li}>
            <h4 style={styles.h4}>{task.task}</h4>
            <div style={styles.divRow}>
                <span style={styles.marginRight}>Actions:{time}</span>
                <Button onClick={() => { dispatch({type: 'sub'})}}>-</Button>
                <Button style={styles.marginRight} onClick={() => { dispatch({type: 'add'})}} >+</Button>
                <Button variant="danger" onClick={()=>{taskDelete(task.id)}}>Delete</Button>
                <Button variant="success" disabled={task.completed} onClick={()=>{setDone(task.id)}}>Done</Button>
            </div>
            <p style={styles.p}>To do: {task.completed ? 'No' : 'Yes'}</p>
            <p style={styles.p}>Created at: {task.date} {task.doneTime ? ' | Done at ' + task.doneTime : null}</p>
        </li>
    )
}

export default Task