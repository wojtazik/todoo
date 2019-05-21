import TaskForm from '../../components/TaskForm'
import { render} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'

describe('renders form', () => {
    test('it renders form and button', ()=>{
        const {getByTestId, container} = render( <RootStore><TaskForm /></RootStore> )
        expect(container).toBeInstanceOf(HTMLElement)
    })
});