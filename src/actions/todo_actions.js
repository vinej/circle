import { dispatch } from '../resolvers/dispatcher'
import TodoService from '../services/todo_service';
import { todoType  as t } from './todo_action_type'
import { isOnline } from '../services/circle_api';
import TodoDal from '../dal/todo_dal';

export class TodoAction {
  static getAll() {
    dispatch( {
      type: t.getAll,
      payload: function() {
        if (isOnline) {
          TodoService.getInstance().getAll( TodoAction._getAll , TodoAction.error);
        } else {
          TodoDal.getAll(TodoAction._getAll , TodoAction.error)
        }
      }
    })
  }

  static _getAll(todos) {
    dispatch( {
      type: t.getAll,
      payload: todos
    })
  }

  static add(todo) {
    dispatch( {
      type: t.add,
      payload: todo
    })
  }

  static delete(id) {
    dispatch( {
      type: t.delete,
      payload: id
    })
  }

  static setDesc(desc) {
    dispatch( {
      type: t.setDesct,
      payload: desc
    })
  }

  static setDone(todo, done) {
    dispatch( {
      type: t.setDone,
      payload: { todo, done }
    })
  }

  static error(error) {
    dispatch( {
      type: t.error,
      payload: error
    })
  }
}
