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
      <button class ="btn btn-danger text-light" onclick="app.todoController.removeTodo('${this.id}')">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
      </svg>
      </button>
    </div>
    `
  }

}