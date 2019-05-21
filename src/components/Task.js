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
        pDeadline: {
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
            <p style={styles.p}>DEADLINE: {task.deadlineDate}</p>
            <p style={styles.pDeadline}>{!task.completed ? checkDate(task.deadlineDate, task.startDate, 'DEADLINE') : checkDate(task.deadlineDate, task.doneDate, 'FINISHED') }</p>
            <p style={styles.p}>Created at: {task.startDate} {task.doneDate ? ' | Done at ' + task.doneDate : null}</p>
        </li>
    )
}

export default Task