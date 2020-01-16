import Database from './database'
import { todo } from '../models/todo_model'

class TodoDal {
    getAll(next,err) {
        Database.select('todo', todo, null, next, err);
        //next(todos);
    }

    add(todo, next, err) {

    };

    delete(entity, next, err) {
        
    };

    update(entity, next, err) {
        
    };
}

export default new TodoDal();