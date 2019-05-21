import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducer } from '../state/combinedReducer';
import {makeid} from "../helpers/idmaker";

const date = new Date()

const store = createStore(combinedReducer, {
    todos: [
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
});


const RootStore = ({children}) => {

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default RootStore;