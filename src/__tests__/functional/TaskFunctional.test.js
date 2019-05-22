import Task from '../../components/Task'
import { render, fireEvent} from "react-testing-library";
import React from 'react'
import RootStore from '../../hoc/WithProviderHOC'
import 'jest-dom/extend-expect'
import {makeid} from "../../helpers/idmaker";
import { getByText } from 'dom-testing-library'

const task = {
    id: makeid(10),
    task: 'Do something with hooks and redux',
    completed: false,
    deadlineDate: '2019-05-25',
    startDate: `2019-05-24 00:00`,
}

describe('Single task component tests', () => {
    const {getByTestId, container} = render( <RootStore><Task task={task}/></RootStore> )
    test('should render correctly with gived props', () => {
        expect(getByText(container, 'To do: Yes')).toHaveTextContent('To do: Yes')
        expect(getByText(container, 'DEADLINE: 2019-05-25')).toHaveTextContent('DEADLINE: 2019-05-25')
        expect(getByTestId('test-deadline-paragraph')).toHaveTextContent('You have 1 days, 2 hours and 0 minutes for finish this task')
        //etc
    })
    //etc
});