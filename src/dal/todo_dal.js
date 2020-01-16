import Database from './database'
import { todo } from '../models/todo_model'

class TodoDal {
    getAll(next,err) {
        Database.select('todo', todo, { Id:2 }, next, err);
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