import { render } from "react-testing-library";
import App from '../../App'
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'



describe('App component with redux store tests', ()=>{

    const { container } = render(
        <RootStore>
            <App />
        </RootStore>
    )

    test('should render App component', ()=> {
        expect(container).not.toBe(0)
    })

    test('should render App childs', ()=> {
        expect(container.childElementCount).not.toBe(0)
    })
})