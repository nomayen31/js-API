function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=> res.json())
    .then(data =>displayTodos(data))
}


function displayTodos(datas){
    const toContainer = document.getElementById("todo-container");
    for (const todo of datas) {
        console.log(todo);
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = `
            <h3>title:${todo.title} </h3>
            <p>${todo.userId}</p>
            <p>completed: ${todo.completed === true ? 'complete' : 'not complete'}</p>

        `
        toContainer.appendChild(todoDiv)

}
}

loadTodos();