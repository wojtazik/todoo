import * as React from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import {Col} from "react-bootstrap";



const ToDoContainer = () => {

    const [tasks, setTasks] = React.useState([
        {
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with php',
            completed: true,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },
        {
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with php',
            completed: true,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        },{
            id: Math.random() * (Math.random() / Math.random()),
            task: 'Do something with hooks and redux',
            completed: false,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()+1}`
        }
    ])


    const AddTasks = (newTask) => {
        setTasks([newTask, ...tasks])
    }

    const deleteTask = (id) => {
        const taskList = tasks;
        const taskToDeletePosition = taskList.findIndex(task => task.id === id)
        const removedTask = taskList.splice(taskToDeletePosition, 1)
        setTasks([...taskList])
    }

    const setTaskDone = (id) => {
        const taskList = tasks;
        const taskToSetDonePosition = taskList.findIndex(task => task.id === id)
        taskList[taskToSetDonePosition].completed = true
        const date = new Date()
        taskList[taskToSetDonePosition].doneTime = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        setTasks([...taskList])
    }

    React.useEffect(()=>{
        const activeTasks = tasks.filter(task => {
            return task.completed === false
        })
        console.log(activeTasks)
        if(activeTasks.length > 5) {
            document.title = `Hurry up! You have ${activeTasks.length} active tasks!`
        } else {
            document.title = `Your task menager`
        }
    }, [tasks])


    return (

        <Col>
            <TaskForm onAddTask={AddTasks} />
            {tasks.length > 0 ? <TaskList setDone={setTaskDone} taskDelete={deleteTask} tasks={tasks} /> : null}
        </Col>
    )
}


export default ToDoContainer