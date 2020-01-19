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
      payload: function() {
        if (isOnline) {
          TodoService.getInstance().add(todo, TodoAction._getAll , TodoAction.error);
        } else {
          TodoDal.add(todo, TodoAction._add , TodoAction.error)
        }
      }
    });
  }

  static _add(todo) {
    dispatch( {
      type: t.add,
      payload: todo,
    })
  }

  static delete(id) {
    dispatch( {
      type: t.delete,
      payload: function() {
        if (isOnline) {
          TodoService.getInstance().delete(id, TodoAction._delete , TodoAction.error);
        } else {
          TodoDal.delete(id, TodoAction._delete , TodoAction.error)
        }
      }
    });
  }

  static _delete(id) {
    dispatch( {
      type: t.delete,
      payload: id,
    })
  }

  static update(todo) {
    dispatch( {
      type: t.update,
      payload: function() {
        if (isOnline) {
          TodoService.getInstance().update(todo, TodoAction._update , TodoAction.error);
        } else {
          TodoDal.update(todo, TodoAction._update , TodoAction.error)
        }
      }
    });
  }

  static _update(todo) {
    dispatch( {
      type: t.update,
      payload: todo,
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
