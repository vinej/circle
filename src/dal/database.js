import * as SQLite from "expo-sqlite";

class Database {
  db = null;

  create_tables() {
    this.db.transaction(tx => {
      tx.executeSql(
        "create table if not exists todo (Id integer primary key not null, IsDone integer, Content text);"
      );
    });
  }

  insert_test_values() {
    this.db.transaction(tx => {
        tx.executeSql("insert into todo(Id,IsDone,Content) values(1,1,'acheter des vivres');");
        tx.executeSql("insert into todo(Id,IsDone,Content) values(2,0,'terminer mes devoirs');");
      }
    )
  }

  open(next, err) {
    try {
      this.db = SQLite.openDatabase("circle.db");
      //this.create_tables();
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

  select(name, entity, condition, next, err) {
    fields = Object.keys(entity).join(',');
    conditions = [];
    parameters = [];

    if (condition !== null) {
      for (let [key, value] of Object.entries(condition)) {
          conditions.push(`${key} = ?`);
          parameters.push(value)
      }
    }

    if (condition !== null) {
      this.db.transaction(tx => {
        tx.executeSql(
          `select ${fields} from ${name} where ${conditions.join(' and ')};`,
          parameters,
          (_, { rows: { _array } }) => next( _array), (errror) => err(error) )
        });
    } else {
      this.db.transaction(tx => {
        tx.executeSql(
          `select ${fields} from ${name};`,
          null,
          (_, { rows: { _array } }) => next(_array), (error) => err(error) )
      });
    }
  };
}

export default new Database();
