import * as React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {checkDate} from '../helpers/dateChecker'

const Task = ({task}) => {

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
        ['p-deadline'] : {
            color: 'pink'
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

    const taskDispatch = useDispatch()
    const deleteTask = (id) => {
        taskDispatch({type: 'DELETE_TASK', id})
    }
    const setTaskDone = (id) => {
        taskDispatch({type:'SET_TASK_DONE', id})
    }

    console.log(new Date(task.date))
    return (
        <li style={styles.li}>
            <h4 style={styles.h4}>{task.task}</h4>
            <div style={styles.divRow}>
                <Button
                    variant="danger"
                    onClick={()=>{deleteTask(task.id)}}>
                    Delete
                </Button>
                <Button
                    variant="success"
                    disabled={task.completed}
                    onClick={()=>{setTaskDone(task.id)}}>
                    Done
                </Button>
            </div>
            <p style={styles.p}>To do: {task.completed ? 'No' : 'Yes'}</p>
            <p style={styles.p}>DEADLINE: {task.deadline}</p>
            <p style={styles['p-deadline']}>{!task.completed ? checkDate(task.deadline, task.date, 'FINISHED') : checkDate(task.deadline, task.doneTime, 'DEADLINE') }</p>
            <p style={styles.p}>Created at: {task.date} {task.doneTime ? ' | Done at ' + task.doneTime : null}</p>
        </li>
    )
}

export default Task