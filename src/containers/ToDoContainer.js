import * as React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import {Col} from "react-bootstrap";
import {useSelector} from "react-redux";

const ToDoContainer = () => {

    let todos = useSelector((state)=>{
        return state.todos
    })

    // Setting page title in browser
    React.useEffect(()=>{
        const activeTasks = todos.filter(task => {
            return task.completed === false
        })
        if(activeTasks.length > 5) {
            document.title = `Hurry up! You have ${activeTasks.length} active tasks!`
        } else {
            document.title = `Your task menager`
        }
    })

    return (
        <Col>
            <TaskForm />
            {todos.length > 0 ? <TaskList tasks={todos} /> : null}
        </Col>
    )
}


export default ToDoContainer