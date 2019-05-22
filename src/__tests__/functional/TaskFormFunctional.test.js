import TaskForm from '../../components/TaskForm'
import { render, fireEvent} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'
import {shallow} from 'enzyme'

describe('renders form', () => {
    const {getByTestId, container} = render( <RootStore><TaskForm /></RootStore> )

    test('it renders form and button', ()=>{
        expect(getByTestId('test-show-modal-button')).toHaveTextContent('Add task')
    })

    test('should shows and hide form after button click', function () {
        const formShowButton = getByTestId('test-show-modal-button')
        fireEvent.click(formShowButton)
        expect(getByTestId('test-modal')).toBeInTheDocument
        fireEvent.click(formShowButton)
        expect(getByTestId('test-modal')).not.toBeInTheDocument
    });

    test('should close form after add task', ()=> {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()+1 < 10 ? "0" + (date.getMonth()+1) : date.getMonth()+1
        const day = date.getDay() < 10 ? "0" + date.getDay() : date.getDay()
        const dateString = `${year}-${month}-${day}`
        const formShowButton = getByTestId('test-show-modal-button')

        fireEvent.click(formShowButton)
        fireEvent.change(getByTestId('test-task-input'), {target: {value: 'some text'}})
        fireEvent.change(getByTestId('test-date-input'), {target: {value: dateString}})
        expect(getByTestId('test-task-input').value).toBe('some text')
        expect(getByTestId('test-date-input').value).toBe(dateString)
        fireEvent.click(getByTestId('test-add-task-button'))
        expect(expect(getByTestId('test-modal')).not.toBeInTheDocument)
    })

    test('should show be shows alerts if inputs are empty', ()=>{
        fireEvent.change(getByTestId('test-task-input'), {target: {value: ''}})
        fireEvent.change(getByTestId('test-date-input'), {target: {value: ''}})
        fireEvent.click(getByTestId('test-add-task-button'))
        expect(getByTestId('test-task-form-span')).toHaveTextContent('Enter text before you add task')
        expect(getByTestId('test-date-form-span')).toHaveTextContent('Enter date before you add task')
    })

    test('should close form after click close', ()=>{
        const formShowButton = getByTestId('test-show-modal-button')
        fireEvent.click(formShowButton)
        expect(getByTestId('test-modal')).toBeInTheDocument
        fireEvent.click(getByTestId('test-cloxe-button'))
        expect(getByTestId('test-modal')).not.toBeInTheDocument
    })
});

