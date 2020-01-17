import DatabaseStore from '../stores/database_store'
import { databaseTypes as t, databasePrefixType  } from '../actions/database_action_type'

export function databaseResolver(action, next) {
  if ( databasePrefixType !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.open :
      DatabaseStore.open()
      break;
    case t.close :
      DatabaseStore.close()
      break;
    case t.error :
      DatabaseStore.error(action.payload)
      break;
  }
  return next(null, action);
}
