import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form";


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


const TaskForm = ({ onAddTask, tasks }) => {


    const [shows, setShow] = React.useState(false)
    const [task, setTask] = React.useState({text: '', date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`, completed: false})
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
            id: Math.random() * (Math.random() / Math.random()),
            task: taskText.value,
            completed: false,
            date: taskDate.value
        }
        onAddTask(task);
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
                            <Form.Label>Task Date</Form.Label>
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