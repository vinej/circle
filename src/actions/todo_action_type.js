// same name of the type is the name of the function, but with a underscore. The pattern need that
export let todoPrefixType = 'todo_'

export let todoTypes = {
  todoAdd       : todoPrefixType + 'Add',
  todoDelete    : todoPrefixType + 'Delete',
  todoSetDesc   : todoPrefixType + 'SetDesc',
  todoSetDone   : todoPrefixType + 'SetDone',
  todoGetAll    : todoPrefixType + 'GetAll'
}
