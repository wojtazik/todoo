import ToDoContainer from '../../containers/ToDoContainer'
import { render} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'

const { container } = render(
    <RootStore>
        <ToDoContainer />
    </RootStore>

)

describe('renders ToDoContainer', () => {

    test('should render ToDoContainer', ()=>{
        expect(container).not.toBeEmpty
    })

    test('should have todos list', ()=>{
        const list = container.getElementsByTagName("ul")
        expect(list.length).toEqual(1)
    })

    test('should render form', ()=>{
        expect(container.getElementsByTagName('button').length).not.toBe(0)
    })
});