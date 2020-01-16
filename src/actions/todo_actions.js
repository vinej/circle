import { dispatch } from '../resolvers/dispatcher'
import TodoService from '../services/todo_service';
import { todoTypes  as t } from './todo_action_type'
import { authTypes  as at } from './auth_action_type'
import { TabRouter } from 'react-navigation';
import { IsOnline } from '../services/circle_api';
import TodoDal from '../dal/todo_dal';

export class TodoActions {
  static todoGetAll() {
    dispatch( {
      type: t.todoGetAll,
      payload: function() {
        if (IsOnline == true) {
          const service = TodoService.getInstance()
          service.getAll( TodoActions._todoGetAll , TodoActions.todoError);
        } else {
          TodoDal.getAll(TodoActions._todoGetAll , TodoActions.todoError)
        }
      }
    })
  }

  static _todoGetAll(todos) {
    dispatch( {
      type: t.todoGetAll,
      payload: todos
    })
  }

  static todoAdd(todo) {
    dispatch( {
      type: t.todoAdd,
      payload: todo
    })
  }

  static todoDelete(id) {
    dispatch( {
      type: t.todoDelete,
      payload: id
    })
  }

  static todoSetDesc(desc) {
    dispatch( {
      type: t.todoSetDesc,
      payload: desc
    })
  }

  static todoSetDone(todo, done) {
    dispatch( {
      type: t.todoSetDone,
      payload: { todo, done }
    })
  }

  static todoError(error) {
    dispatch( {
      type: t.todoError,
      payload: error
    })
  }
}
