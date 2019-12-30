import { action, decorate, observable } from 'mobx'
import TodoActions from '../actions/todo_actions'

class TodoStore {

  desc = '';
  totos = [];
  count = 0;

  constructor() {
    this.on = TodoActions
  }

  set desc(desc) {
    this.desc = desc
  }

  get desc() {
    return this.desc
  }

  get todos() {
    return this.todos
  }

  setAll(todos) {
    this.todos = todos
  }

  setDesc(desc) {
    this.desc = desc
  }

  setDone( {todo, done }) {
    todo.done = done
  }

  delete(id) {
    const idx = this.state.todos.findIndex( (r) => r.id === id );
    this.todos.splice(idx,1);
  }

  init() {
    this.todos = []
    this.desc = ''
    this.count = 0
  }

  add() {
    if (this.desc === '') return
    this.todos.push( { id: this.count, desc: this.desc, done: false} );
    this.count = this.state.count + 1
    this.desc = ''
  }
}

decorate( TodoStore, {
  desc: observable,
  todos : observable,
  count: observable,
  add: action,
  init: action
})

export default new TodoStore()
