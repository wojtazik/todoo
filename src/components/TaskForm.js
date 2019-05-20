import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { makeid } from '../helpers/idmaker'

const styles = {
    h3: {
        color: 'white',
        fontSize: '24px',
        cursor: 'pointer',
        marginTop: '2rem',
        textDecoration: 'underline'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

const TaskForm = ({}) => {

    const dispatch = useDispatch()
    const [shows, setShow] = React.useState(false)

    const handleClose = () =>{
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    let taskText = '';
    let taskDate = '';

    const handleCloseAndAddTask = () =>{
        const task = {
            id: makeid(10),
            task: taskText.value,
            completed: false,
            deadline: taskDate.value,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1 } ${new Date().getHours()}:${new Date().getMinutes()}`
        }
        dispatch({type: 'ADD_TASK', task})
        setShow(false)
    }

    return(
        <>
        <div>
            <h3 style={styles.h3} onClick={handleShow}>Add task</h3>
        </div>
        <Modal show={shows} onHide={handleClose}>
            <Modal.Header  style={styles.header} closeButton>
                <Modal.Title>Add Task form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Task text</Form.Label>
                        <Form.Control type="text" ref={node => { taskText = node }}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Task Deadline</Form.Label>
                        <Form.Control type="date" ref={node => { taskDate = node }}></Form.Control>
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