import * as SQLite from "expo-sqlite";

class Database {
  db = null;
  version = 1;
  idName = 'Id';

  _create() {
    this.db.transaction(tx => {
      tx.executeSql(
        "create table if not exists todo (Id integer primary key not null, IsDone integer, Content text, CreatedDate text);",
        null, 
        (trn, res) => console.log('create ok:', trn, res), 
        (trn, error) => console.log('create error:', trn, error),
      );
      tx.executeSql(
        "create index todo_index on todo(CreatedDate);",
        null, 
        (trn, res) => console.log('create ok:', trn, res), 
        (trn, error) => console.log('create error:', trn, error),
      );
    });
  }

  _drop(table) {
    this.db.transaction(tx => {
      tx.executeSql(
        `drop table if exists ${table}`, null, 
        (trn,res) => console.log('drop ok: ',trn, res), 
        (trn, error) => console.log('drop error', trn, error)
      );
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
      //this._drop('todo');
      //this._create();
      //this.insert_test_values();
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

  delete(name, id, next, err) {
    var parameters = [];
    parameters.push(id);

    this.db.transaction(tx => {
      tx.executeSql(
        `delete from ${name} where Id=?;` ,
        parameters,
        () => next(id),
        (_, error) => err(error))
    });
  };
}

export default new Database();
