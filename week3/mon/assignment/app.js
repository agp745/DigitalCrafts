const taskNameInput = document.getElementById('taskName')
const addTaskButton = document.getElementById('addButton')
const pendingTasks = document.getElementById('pending')
const completedTasks = document.getElementById('completed')

addTaskButton.addEventListener('click', function() {

    const taskName = taskNameInput.value
    const li = document.createElement('li')
    li.innerHTML = taskName
    li.setAttribute('draggable', 'true')
    pendingTasks.appendChild(li)

    const deleteButton = document.createElement('button')
    li.appendChild(deleteButton)
    deleteButton.innerHTML = 'Delete'

    deleteButton.addEventListener('click', function() {
        this.parentElement.parentElement.removeChild(this.parentElement)
    })

    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('value', `${taskName}`)
    checkbox.setAttribute('id', `checkbox`)
    li.prepend(checkbox)

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            completedTasks.appendChild(li)
        } else {
            pendingTasks.appendChild(li)
        }
    })

})


