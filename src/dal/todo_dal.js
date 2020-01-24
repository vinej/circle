import Database from './database'
import { newTodo } from '../models/todo_model'

class TodoDal {
    getAll(next,err) {
        Database.select('todo', newTodo(), null, 'Id desc', next, err);
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
}

export default new TodoDal();