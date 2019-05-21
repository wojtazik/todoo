import TaskForm from '../../components/TaskForm'
import { render} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'


describe('renders form', () => {
    const {getByTestId, container} = render( <RootStore><TaskForm /></RootStore> )
    test('it renders form and button', ()=>{
        expect(getByTestId('test-show-modal-button')).toHaveTextContent('Add task')
    })
});