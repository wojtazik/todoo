import { createStore } from "redux";
import { combinedReducer } from './combinedReducer'
import { makeid } from '../helpers/idmaker'



const date = new Date()

const store = createStore(combinedReducer, {
    todos: [
        {
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with php',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },
        {
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with php',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        },{
            id: makeid(10),
            task: 'Do something with hooks and redux',
            completed: false,
            deadline: '2019-05-25',
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
        }
    ]}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



export default store