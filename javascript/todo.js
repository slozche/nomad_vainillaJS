const toDoForm = document.querySelector('#todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintTodo(newTodo){
    const li = document.createElement('li')
    li.id = newTodo.id
    const span = document.createElement('span')
    span.innerText = newTodo.text
    const btn = document.createElement('button')
    btn.innerText = '❌'
    btn.addEventListener('click', deleteToDo)
    li.append(span, btn)
    toDoList.append(li)
}

function handleToDoSubmit(event){
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ''
    const newTodoObj = {
        id: Date.now(),
        text : newToDo
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos)
    parseToDos.forEach(paintTodo)
}