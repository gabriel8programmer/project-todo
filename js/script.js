const btnAdd = document.getElementById("btn-add")
const textTodo = document.getElementById("todo-text")
const todoes = document.getElementById("todoes")

function updateAllButtons(){

    document.querySelectorAll(".todo").forEach(todo => {
        const btnEdit = todo.querySelector(".btn-edit")
        const btnCheck = todo.querySelector(".btn-check")
        const btnRemove = todo.querySelector(".btn-remove")

        btnEdit.addEventListener("click", (e)=>{
            const newText = prompt("Edite aqui sua tarefa")
            const text = todo.querySelector("p")
            text.innerHTML = newText
        })    

        btnCheck.addEventListener("click", (e)=>{
            todo.classList.toggle("actived")
        })    

        btnRemove.addEventListener("click", (e)=>{
            todo.remove()
        })    
    }) 
    
}

function createTodo(text){
    return `
        <div class="todo">
            <p>${text}</p>
            <div class="controls">
                <button class="btn-edit">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-check">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button class="btn-remove">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    `
}

function addNewTodo(todo){
    todoes.innerHTML += todo
}

btnAdd.addEventListener("click", (e)=>{
    const newTodo = createTodo(textTodo.value)
    addNewTodo(newTodo)
    textTodo.value = ""
    textTodo.focus()
    updateAllButtons()
})

updateAllButtons()