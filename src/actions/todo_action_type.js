// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoPrefix = 'todo_'

export let todoType = {
  add       : todoPrefix + 'add',
  delete    : todoPrefix + 'delete',
  update    : todoPrefix + 'update',
  setDesct  : todoPrefix + 'setDesc',
  setDone   : todoPrefix + 'setDone',
  getAll    : todoPrefix + 'getAll',
  undo      : todoPrefix + 'undo',
  error     : todoPrefix + 'error'
}
