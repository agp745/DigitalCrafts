let tasks = [];

function addTask() {
    let taskName = prompt('Enter task name')
    let taskPriority = prompt('Enter task priority\n(1 is highest priority)')
    let task = {
        name: taskName,
        priority: taskPriority,
        id: tasks.length + 1
    }
    tasks.push(task);
}

function deleteTask() {
    let deleteTaskID = prompt('enter the id of the task you want to delete')
    let deleteTaskIDNum = parseInt(deleteTaskID);
    
    for(let i = 0; i < tasks.length; i++) {
        if (deleteTaskIDNum === tasks[i].id) {
            let deleted = tasks[i].name
            window.alert(`You have deleted task: ${deleted}`)
            console.log(`You have deleted task: ${deleted}`)
            tasks.splice(i, 1);
        }
    }
}

function viewTasks(){
    for (let i = 0; i < tasks.length; i++){
        console.log(tasks[i]);
    }
}

while(true){
    let promptInput = prompt('Enter:\n1 - add a new task\n2 - delete task\n3 - view all tasks\nq - quit/exit')

    if (promptInput === '1'){
        addTask()
    }
    
    else if (promptInput === '2'){
        deleteTask()
    }

    else if (promptInput === '3'){
        viewTasks()
    }

    else if (promptInput === 'q'){
        break
    }

    else {
        console.log('Input not valid')
        window.alert('Input not valid')
    }
}