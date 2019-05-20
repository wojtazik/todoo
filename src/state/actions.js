export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
})

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    id
})

export const setTaskDone = (id) => ({
    type: 'SET_TASK_DONE',
    id
})