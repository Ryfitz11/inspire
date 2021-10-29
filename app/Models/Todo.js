import { ProxyState } from "../AppState.js"

export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed || false
  }

  get Template() {
    return `
    
    <div class="card-text d-flex justify-content-between">
      <input ${this.completed ? 'checked' : ""} onclick="app.todoController.checked('${this.id}')" type="checkbox" class="form-check-input"> 
      ${this.description}
      <button class ="btn btn-secondary" onclick="app.todoController.removeTodo('${this.id}')">x</button>
    </div>
    `
  }

}