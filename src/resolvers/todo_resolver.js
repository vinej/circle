import TodoStore from '../stores/todo_store'
import { todoType as t, todoPrefix  } from '../actions/todo_action_type'

export function todoResolver(action, next) {
  if ( todoPrefix !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.add :
      TodoStore.add(action.payload)
      break;
    case t.delete :
      TodoStore.delete(action.payload)
      break;
    case t.getAll :
      TodoStore.setAll(action.payload)
      break;
    case t.error :
      TodoStore.error(action.payload)
      break;
  }
  return next(null, action);
}
