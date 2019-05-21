export const combinedReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':

            const newState =
                [
                    action.task,
                    ...state.todos
                ]
          localStorage.setItem('todos', JSON.stringify(newState))


            return Object.assign({}, state, {
                todos: [
                    action.task,
                    ...state.todos
                ]
            })
        case 'DELETE_TASK':
            const arrayWithRemovedItem = state.todos.filter(task => {
                return task.id !== action.id
            })
            const todos = {
                todos: arrayWithRemovedItem
            }
            localStorage.setItem('todos', JSON.stringify(arrayWithRemovedItem))
            return {
                ...state,
                ...todos
            }
        case 'SET_TASK_DONE':
            let itemsToChange = state.todos.map(el => {
                if(el.id === action.id) {
                    const date = new Date()
                    return {
                        ...el,
                        completed: !el.completed,
                        doneDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
                    }
                }
                return el
                })
                localStorage.setItem('todos', JSON.stringify(itemsToChange))
                return {
                    ...state,
                    todos: itemsToChange
                }
        default:
            return state
    }
}