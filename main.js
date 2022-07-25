let list = document.getElementById('list'),
    inputTask =  document.getElementById('inputTask'),
    btnNewTask = document.getElementById('btnAdd')

const handleAddTask = (e) => {
    e.preventDefault();
    
    let task = inputTask.value,
        newTask = document.createElement('li'),
        linkTag = document.createElement('a'),
        content = document.createTextNode(task)

    if (task === '') {
        inputTask.setAttribute('placeholder', `Add a valid task`)
        inputTask.className = "error"
        return false
    }

    /* Add content to link */
    linkTag.appendChild(content)
    /* Add property href */
    linkTag.setAttribute('href', "#")
    /* Add link to li tag */
    newTask.appendChild(linkTag)
    /* Add new task to list */
    list.appendChild(newTask)
    /* Clear input */
    inputTask.value = ''

    /* Add remove task on click event to new tasks */
    for(let i = 0; i < list.children.length; i++){
        list.children[i].addEventListener('click', handleDeleteTask)
    }

}

const validateInput = function(){
    inputTask.className = ''
    inputTask.setAttribute("placeholder", "Add new task")
}

const handleDeleteTask = function(){
    this.parentNode.removeChild(this)
}

/* Validate Input */
inputTask.addEventListener('click', validateInput)
/*  Add remove task on click event to old tasks */
for(let i = 0; i < list.children.length; i++){
    list.children[i].addEventListener('click', handleDeleteTask)
}
