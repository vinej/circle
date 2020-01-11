import { action, decorate, observable } from 'mobx'

class TodoStore {
  todos = [];
  count = 0;

  delete(id) {
    const idx = this.todos.findIndex( (r) => r.id === id );
    this.todos.splice(idx,1);
  }

  init() {
    this.todos = []
    this.count = 0
  }

  add(todo) {
    todo.id = this.count + 1;
    this.todos.push( todo );
    this.count = this.count + 1
  }

  setAll(todos) {
    this.todos = todos;
  }

  getAll() {
    return this.todos;
  }

  error(error) {
    
  }
}

decorate( TodoStore, {
  todos : observable,
  count: observable,
  add: action,
  init: action,
  setAll : action,
  getAll: action
})

export default new TodoStore();

