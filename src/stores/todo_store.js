import { action, decorate, observable } from 'mobx'

class TodoStore {
  todos = [];
  count = 0;
  errorMessage = '';
  internalError = null;

  delete(id) {
    const idx = this.todos.findIndex( (r) => r.Id === id );
    this.todos.splice(idx,1);
  }

  init() {
    this.todos = []
    this.count = 0
  }

  add(todo) {
    //todo.id = this.count + 1;
    console.log('todo add', todo)
    this.todos.push( todo );
    this.count = this.count + 1
    this.errorMessage = '';
    this.internalError = null;
  }

  setAll(todos) {
    console.log("set all todos", todos);
    if (todos != null) {
      this.todos = todos;
    }
    this.errorMessage = '';
    this.internalError = null;
  }

  getAll() {
    this.errorMessage = '';
    this.internalError = null;
    return this.todos;
  }

  error(error) {
    this.internalError = error;
    this.errorMessage = "Database error";
  }
}

decorate( TodoStore, {
  todos : observable,
  count: observable,
  internalError: observable,
  errorMessage: observable,
  add: action,
  init: action,
  setAll : action,
  getAll: action
})

export default new TodoStore();

