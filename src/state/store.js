import { createStore } from "redux";
import { combinedReducer } from './combinedReducer'
import { makeid } from '../helpers/idmaker'



const date = new Date()

const toDoFromStorage = JSON.parse(localStorage.getItem('todos'))

const todos = toDoFromStorage ? toDoFromStorage : [
    {
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`,
    },{
        id: makeid(10),
        task: 'Do something with php',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },
    {
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },{
        id: makeid(10),
        task: 'Do something with php',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },{
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },{
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },{
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    },{
        id: makeid(10),
        task: 'Do something with hooks and redux',
        completed: false,
        deadlineDate: '2019-05-25',
        startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
    }
]



const store = createStore(combinedReducer, {
    todos: todos}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store