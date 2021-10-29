import { todoService } from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";


function _draw() {
  let todo = ProxyState.todos
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
  const todos = ProxyState.todos
  let completed = ''
  let checked = todos.filter(t => t.completed)
  completed = `<h4> ${checked.length} / ${todos.length}</h4>`
  document.getElementById('completed').innerHTML = completed
}

export class TodoController {
  constructor() {
    _draw()
    this.getTodo()
    ProxyState.on('todos', _draw)
  }


  addTodo() {
    window.event.preventDefault()
    const form = window.event.target
    let newTodo = {
      // @ts-ignore
      description: form.description.value,
      completed: false,
    }
    todoService.addTodo(newTodo)
    // @ts-ignore
    form.reset()
  }
  async getTodo() {
    try {
      await todoService.getTodo()
    } catch (error) {
      console.error("sandbox error", error)
    }
  }
  async checked(id) {
    await todoService.checked(id)
  }
  async removeTodo(id) {
    try {
      let remove = confirm("Are you sure you want to delete this Todo?")
      if (remove == true) {
        await todoService.removeTodo(id)
      }
    } catch (error) {
      console.error("sandbox error", error);
    }
  }







}