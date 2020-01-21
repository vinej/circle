import { action, decorate, observable } from 'mobx'

class TodoStore {
  todos = [];
  //allTodos = [];
  pagingSize = 100;
  count = 0;
  pageNumber = 0;
  errorMessage = '';
  internalError = null;

  start() {
    return (this.pageNumber * this.pagingSize);
  }

  end() {
    return Math.min((this.pageNumber +1 ) * this.pagingSize, this.todos.length);
    //return Math.min((this.pageNumber +1 ) * this.pagingSize, this.allTodos.length);
  }

  delete(id) {
    console.log('todo store delete');
    //const idx = this.allTodos.findIndex( (r) => r.Id === id );
    //this.allTodos.splice(idx,1);

    const idx = this.todos.findIndex( (r) => r.Id === id );
    this.todos.splice(idx,1);
    //this.todos = this.allTodos.slice( this.start(), this.end());
    this.count -= 1;
  }

  init() {
    this.todos = []
    this.count = 0
  }

  getCount() {
    return this.todos.length;
    //return this.allTodos.length;
  }

  update(todo) {
    //const idx = this.allTodos.findIndex( (r) => r.Id === todo.Id );
    //this.allTodos[idx] = todo;

    const idx2 = this.todos.findIndex( (r) => r.Id === todo.Id );
    this.todos[idx2] = todo;
  }

  next() {
    //if ( ((this.pageNumber + 1) * this.pagingSize) < this.allTodos.length) {
    //  this.pageNumber += 1;
     // this.todos = this.allTodos.slice( this.start(), this.end());
    //}
  }

  prev() {
    //if (this.pageNumber > 0) {
    //  this.pageNumber -= 1;
    //  this.todos = this.allTodos.slice( this.start(), this.end());
    //}
  }

  add(todo) {
    //this.allTodos.unshift( todo );
    this.pageNumber = 0;
    //this.todos = this.allTodos.slice( this.start(), this.end());
    this.todos.unshift( todo );
    this.count = this.count + 1
    this.errorMessage = '';
    this.internalError = null;
  }

  setAll(todos) {
    if (todos != null) {
      //this.allTodos = todos;
      this.todos = todos; //this.allTodos.slice( this.start(), this.end());
    } else {
        //this.allTodos = [];
        this.todos = [];
    }
    this.errorMessage = '';
    this.internalError = null;
    //this.count = this.allTodos.length;
    this.count = this.todos.length;
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
  pageNumber: observable,
  firstIndex: observable,
  lastIndex: observable,
  internalError: observable,
  errorMessage: observable,
  add: action,
  init: action,
  setAll : action,
  getAll: action,
  getCount: action,
  start: action,
  end:action,
  next: action,
  prev: action,

})

export default new TodoStore();

