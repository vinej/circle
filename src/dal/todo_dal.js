import Database from './database'
import { newTodo } from '../models/todo_model'
import TodoStore from '../stores/todo_store';

class TodoDal {
    getAll(next,err) {
        let condition = { IsDeleted : 0, TodoDate: TodoStore.selectedDate };
        Database.select('todo', newTodo(), condition, 'Id desc', next, err);
    }

    add(todo, next, err) {
        Database.insert('todo', todo, next, err);
    };

    delete(id, next, err) {
        Database.delete('todo', id, next, err);
    };

    update(todo, next, err) {
        Database.update('todo', todo, next, err);
    }

    undo(todo, next, err) {
        Database.undo('todo', todo, next, err);
    }
}

export default new TodoDal();