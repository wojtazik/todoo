export const combinedReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
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
                        completed: true,
                        doneTime : `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()+1} ${date.getHours()}:${date.getMinutes()}`
                    }
                }
                return el
                })
                return {
                    ...state,
                    todos: itemsToChange
                }
        default:
            return state
    }
}