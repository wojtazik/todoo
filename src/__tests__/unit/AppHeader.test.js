import { render} from "react-testing-library";
import AppName from '../../components/AppName'
import React from 'react'
import 'jest-dom/extend-expect'

describe('AppName tests',() => {

    test('AppHeader renders with default app name', () => {
        const { container, getByTestId,} = render(<AppName/>)
        expect(container.firstChild).toHaveTextContent('ToDo App')

    })
});