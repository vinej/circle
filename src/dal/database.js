import * as SQLite from "expo-sqlite";
import { newTodo } from "../models/todo_model";

class Database {
  db = null;
  version = 1;
  idName = 'Id';

  _executeSql = (sql,params=[])=>new Promise((resolve , reject)=>{
    this.db.transaction((trans)=>{
        trans.executeSql(sql,params,(db,results)=>{
            console.log(`SQL:Success : ${sql}`)
            console.log(`    Parameters : ${params}`)
            console.log('SQL:End')
            resolve(results);
        },
        (error)=>{
            console.log(`SQL:Error : ${sql}`)
            console.log(`    Parameters : ${params}`)
            console.log(`    Error : ${error}`)
            console.log('SQL:End')
          reject(error);
        });
    });
  });

  _type(value) {
    if (typeof(value) == 'number') {
      valueString = value.toString();
      if (valueString.indexOf(".") != -1) {
        return 'real';
      } else {
        return 'integer';
      }
    }
    return 'text';
  }

  _table(tableList) {
    sqlList =  [];
    tableList.forEach(tableDef => {
      sqlList =  [];
      for (let [key, value] of Object.entries(tableDef.modele)) {
        if (key == 'Id') {
          sqlList.push('Id integer primary key not null');
        } else {
          sqlList.push(`${key} ${this._type(value)}`);
        }
      }
      this._executeSql(`create table if not exists ${tableDef.name}(${sqlList.join(',')} )`);
    });
  }

  _drop(tableList) {
    tableList.forEach(table => {
      this._executeSql(`drop table if exists ${table}`);
    });
  }

  insert_test_values() {
    this.db.transaction(tx => {
        tx.executeSql("insert into todo(IsDone,Content,CreatedDate) values(1,'acheter des vivres', datetime('now'));");
        tx.executeSql("insert into todo(IsDone,Content,CreatedDate) values(0,'terminer mes devoirs', datetime('now));");
      }
    )
  }

  open(next, err) {
    try {
      this.db = SQLite.openDatabase("circle.db");
      //this._drop(['todo']);
      //this._table([ { name:'todo', modele: newTodo()}]);
      next();
    } catch(error) {
      err(error)
    }
  }

  close() {
    try {
      this.db._db.close();
      this.db = null;
      next();
    } catch(error) {
      err(error)
    }
  }

  select(name, entity, condition, order, next, err) {
    fields = Object.keys(entity).join(',');
    conditions = [];
    parameters = [];

    if (order == null) {
      order = 'Id';
    }

    if (condition !== null) {
      for (let [key, value] of Object.entries(condition)) {
          conditions.push(`${key} = ?`);
          parameters.push(value)
      }
    }

    if (condition !== null) {
      this.db.transaction(tx => {
        tx.executeSql(
          `select ${fields} from ${name} where ${conditions.join(' and ')} order by ${order};`,
          parameters,
          (_, { rows: { _array } }) => next( _array), (_,error) => err(error) )
        });
    } else {
      this.db.transaction(tx => {
        tx.executeSql(
          `select ${fields} from ${name} order by ${order};`,
          null,
          (_, { rows: { _array } }) => next(_array), (_,error) => err(error) )
      });
    }
  };

  // insert into todo(IsDone,Content) values(?,?)
  // the Id iis autoincrement and return after the insert
  insert(name, entity, next, err) {
    fields = [];
    values = [];
    parameters = [];

    for (let [key, value] of Object.entries(entity)) {
      if (key != this.idName) {
          fields.push(key)
          values.push('?');
          parameters.push(value)
      }
    }

    this.db.transaction(tx => {
      tx.executeSql(
        `insert into ${name} (${fields.join(',')}) values(${values.join(',')});`,
        parameters,
        (_,res) =>  {
            entity.Id = res.insertId; 
            next(entity);
         }, 
         (_, error) => {
           err(error);
         })
      }
    );
  }

  // update table set column=?, column = ? ... where Is = , column= value
  // do not update the Id column. This column is used into the where condition
  update(name, entity, next, err) {
    var fields = [];
    var parameters = [];
    var id = -1;

    for (let [key, value] of Object.entries(entity)) {
      if (key != this.idName) {
        fields.push(`${key}=?`);
        parameters.push(value)
      } else {
        id = value;
      }
    }
    parameters.push(id);

    this.db.transaction(tx => {
      tx.executeSql(
        `update ${name} set ${fields.join(",")} where Id=?;` ,
        parameters,
        () => next(entity),
        (_, error) => err(error))
    });
  };

  undo(name, todo, next, err) {
    if (todo == null) {
      return;
    }
    var parameters = [];
    parameters.push(todo.Id);

    this.db.transaction(tx => {
      tx.executeSql(
        `update ${name} set IsDeleted = 0 where Id=?;` ,
        parameters,
        () => next(todo),
        (_, error) => err(error))
    });
  };

  delete(name, id, next, err) {
    var parameters = [];
    parameters.push(id);

    this.db.transaction(tx => {
      tx.executeSql(
        `update ${name} set IsDeleted = 1 where Id=?;` ,
        parameters,
        () => next(id),
        (_, error) => err(error))
    });
  }
}

export default new Database();
