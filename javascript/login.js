const loginForm = document.querySelector('#login-form')
const loginText = document.querySelector('#login-text')
const loginName = document.querySelector('#name')
const loginContainer = document.querySelector('#login-container')
const todolistContainer = document.querySelector('#todolist-container')

const HIDDEN_KEY = 'hidden'
const USERNAME_KEY = 'username'

const login = (event) => {
    event.preventDefault()
    localStorage.setItem(USERNAME_KEY, loginText.value)
    loginName.innerText = '안녕하세요. ' + loginText.value + '님'
    loginContainer.classList.add(HIDDEN_KEY)
    todolistContainer.classList.remove(HIDDEN_KEY)
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
    loginContainer.classList.remove(HIDDEN_KEY)
    loginForm.addEventListener('submit', login)
} else {
    todolistContainer.classList.remove(HIDDEN_KEY)
}
