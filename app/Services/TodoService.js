import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js";

class TodoService {
  async getTodo() {
    const res = await sandboxApi('/fitz/todos')
    console.log(res.data)
    const todo = res.data.map(t => new Todo(t))
    ProxyState.todos = todo
  }
  async addTodo(newTodo) {
    const res = await sandboxApi.post('/fitz/todos', newTodo)
    const todo = new Todo(res.data)
    ProxyState.todos = [...ProxyState.todos, todo]
  }

  async removeTodo(id) {
    await sandboxApi.delete('/fitz/todos/' + id)
    ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
  }

  async checked(id) {
    try {
      let found = ProxyState.todos.find(t => id == t.id)
      found.completed = !found.completed
      const res = await sandboxApi.put('/fitz/todos/' + id, found)
      ProxyState.todos = ProxyState.todos

    } catch (error) {

    }
  }


}


export const todoService = new TodoService()