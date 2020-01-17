import { dispatch } from '../resolvers/dispatcher'
import { databaseType as t } from './database_action_type'
import Database from '../dal/database'


// must use static method to pass them as callback
export class DatabaseAction {
  static open() {
    dispatch( {
      type: t.open,
      payload: function() {
        Database.open(DatabaseAction._open , DatabaseAction.error);
      }
    });
  };

  static _open() {
    dispatch( {
      type: t.open
    });
  };

  static close() {
    dispatch( {
      type: t.close,
      payload: function() {
        Database.close(DatabaseAction._close , DatabaseAction.error);
      }
    });
  };

  static _close() {
    dispatch( {
      type: t.close
    });
  }

  static error(error) {
    dispatch( {
      type: t.error,
      payload : error
    });
  }
}

