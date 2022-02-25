import UI from './ui.js'
import Task from './task.js'

const ui = new UI()

ui.showAllTasks()

document.querySelector('.AddTaskBtn').addEventListener('click', e => {

    const taskTitle = document.querySelector('#newtaskID').value
    // console.log(taskTitle)

    if (taskTitle.length > 0) {
        const task = new Task(taskTitle)
        console.log(task)

        ui.addToUI(task)
        ui.resetForm()
    }
})


document.querySelector('.task-list').addEventListener('click', e => {
    // e.preventDefault()

    if (e.target.className.includes('task__op_edit')) {
        ui.editTask(e)
    }

    if (e.target.className.includes('task__op_delete')) {
        // console.log('Delete')
        ui.deleteTask(e)
    }

    if (e.target.className.includes('task-check')) {
        ui.completeTask(e)
    }

    // console.log(e.target.className)

})

document.querySelector('.EditTaskBtn').addEventListener('click', e => {
    ui.updateTask(e)
})

document.querySelector('.CancelTaskBtn').addEventListener('click', e => {
    ui.cancelTask(e)
})

// task__op_delete md hydrated
// index.js:25 task__op_edit md hydrated
// index.js:25 task-check