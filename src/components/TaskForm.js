import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { makeid } from '../helpers/idmaker'

const styles = {
    button: {
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer',
        marginTop: '2rem',
        textDecoration: 'underline',
        background: 'transparent',
        paddingBottom: '1rem',
        border: 'none'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

const TaskForm = () => {

    const dispatch = useDispatch()
    const [shows, setShow] = React.useState(false)
    const [createClicked, setCreateClicked] = React.useState(false)
    const [taskIsEmpty, setTaskIsEmpty] = React.useState(false)
    const [dateIsEmpty, setDateIsEmpty] = React.useState(false)


    const handleClose = () =>{
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    let taskText = '';
    let taskDate = '';

    const handleCloseAndAddTask = () =>{
        if(taskText.value !== '' && taskDate.value !== '') {
            const task = {
                id: makeid(10),
                task: taskText.value,
                completed: false,
                deadlineDate: taskDate.value,
                startDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1 } ${new Date().getHours()}:${new Date().getMinutes()}`
            }
            dispatch({type: 'ADD_TASK', task})
            if(createClicked === true && (taskText.value !== '' || taskDate.value !== '')) {
                setCreateClicked(false)
            }
            setDateIsEmpty(false)
            setTaskIsEmpty(false)
            setShow(false)
        } else {
            if(taskDate.value === '') {
                setDateIsEmpty(true)
            }
            if(taskText.value === '') {
                setTaskIsEmpty(true)
            }

        }
    }

    return(
        <>
        <div>
            <button data-testid="test-show-modal-button" style={styles.button} onClick={handleShow}>Add task</button>
        </div>
        <Modal data-testid="test-modal" show={shows} onHide={handleClose}>
            <Modal.Header  style={styles.header} closeButton>
                <Modal.Title>Add Task form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form data-testid="test-form">
                    <Form.Group>
                        <Form.Label data-testid="test-task-label">Task text</Form.Label>
                        <Form.Control type="text" ref={node => { taskText = node }} />
                        {taskIsEmpty && 'Enter text before you add task'}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label data-testid="test-date-label">Task Deadline</Form.Label>
                        <Form.Control type="date" ref={node => { taskDate = node}} />
                        {dateIsEmpty && 'Enter date before you add task'}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCloseAndAddTask}>
                    Add task
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default TaskForm