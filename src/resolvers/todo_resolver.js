import todoStore from '../stores/todo_store'
import { todoTypes as t, todoPrefixType  } from '../actions/todo_action_type'

export function todoResolver(action, next) {
  if ( todoPrefixType !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.todoAdd :
      todoStore.add(action.payload)
      break;
    case t.todoDelete :
      todoStore.delete(action.payload)
      break;
    case t.todoGetAll :
      console.log("xxxxxxxx set all");
      console.log(action.payload);
      todoStore.setAll(action.payload)
      break;
  }
  return next(null, action);
}
