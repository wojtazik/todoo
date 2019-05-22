import TaskList from '../../components/TaskList'
import { render, fireEvent} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'
import {makeid} from "../../helpers/idmaker";
import TaskForm from '../../components/TaskForm'

const date = new Date()

const tasks = [
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

describe('Task list tests', () => {
    const {getByTestId, container} = render( <RootStore><TaskList tasks={tasks}/></RootStore> )

    test('should renders list of tasks this same length as props', ()=>{
        const renderedList = getByTestId('test-task-list')
        expect(renderedList.childElementCount).toEqual(tasks.length)
    })
});