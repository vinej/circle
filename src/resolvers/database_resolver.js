import DatabaseStore from '../stores/database_store'
import { databaseType as t, databasePrefix  } from '../actions/database_action_type'

export function databaseResolver(action, next) {
  if ( databasePrefix !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.open :
      DatabaseStore.open()
      break;
    case t.close :
      DatabaseStore.close()
      break;
    case t.create :
      DatabaseStore.create(action.payload)
      break;
    case t.update :
      DatabaseStore.update(action.payload)
      break;
    case t.error :
      DatabaseStore.error(action.payload)
      break;
  }
  return next(null, action);
}
