import { dispatch } from '../resolvers/dispatcher'
import { databaseTypes as t } from './database_action_type'
import Database from '../dal/database'


// must use static method to pass them as callback
export class DatabaseAction {
  static async open() {
    dispatch( {
      type: t.open,
      payload: function() {
        Database.open(DatabaseAction._open , DatabaseAction.error);
      }
    });
  };

  static async _open() {
    dispatch( {
      type: t.open,
      payload: null
    });
  };

  static async close() {
    dispatch( {
      type: t.close,
      payload: function() {
        Database.close(DatabaseAction._close , DatabaseAction.error);
      }
    });
  };

  static async _close() {
    dispatch( {
      type: t.close,
      payload : null
    });
  }

  static async error(error) {
    dispatch( {
      type: t.error,
      payload : error
    });
  }
}
