import * as React from 'react'
import { Button } from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {checkDate} from '../helpers/dateChecker'

const Task = ({task}) => {

    const styles = {
        h4: {
            color: task.completed ? 'green' : 'red',
            fontSize: '24px',
            wordWrap: 'break-word',
            fontWeight: '300',
            marginBottom: '20px'
        },
        li: {
          border: '1px solid white',
            padding: '10px'
        },
        p: {
          padding: '5px',
          color: 'white'
        },
        pTimeout: {
          padding: '5px',
          color: 'white',
          fontWeight: '500',
          fontSize: '18px'
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
                    onClick={()=>{deleteTask(task.id)}}
                    style={{marginRight: '5px'}}>
                    Delete
                </Button>
                <Button
                    variant={task.completed ? "warning" :"success"}
                    onClick={()=>{setTaskDone(task.id)}}>
                  {task.completed ? 'Restore' : 'Done'}
                </Button>
            </div>
            <p style={styles.p}>To do: {task.completed ? 'No' : 'Yes'}</p>
            <p style={styles.pTimeout}>DEADLINE: {task.deadlineDate}</p>
            <p style={styles.pDeadline} data-testid="test-deadline-paragraph">{!task.completed ? checkDate(task.deadlineDate, task.startDate, 'DEADLINE') : checkDate(task.deadlineDate, task.doneDate, 'FINISHED') }</p>
            <p style={styles.p}>Created at: {task.startDate} {task.doneDate ? ' | Done at ' + task.doneDate : null}</p>
        </li>
    )
}

export default Task