import * as SQLite from "expo-sqlite";
import { createContext } from "react";

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

  open() {
    this.db = SQLite.openDatabase("circle.db");
  }

  close() {
    this.db = null;
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
