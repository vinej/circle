// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoPrefix = 'todo_'

export let todoType = {
  add       : todoPrefix + 'Add',
  delete    : todoPrefix + 'Delete',
  setDesct  : todoPrefix + 'SetDesc',
  setDone   : todoPrefix + 'SetDone',
  getAll    : todoPrefix + 'GetAll',
  error     : todoPrefix + 'Error'
}
