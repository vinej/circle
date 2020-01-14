import notificationStore from '../stores/notification_store'
import { notificationTypes as t, notificationPrefixType  } from '../actions/notification_action_type'

export function notificationResolver(action, next) {
  if ( notificationPrefixType !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.notificationSaySend :
      notificationStore.send(action.payload)
      break;
    case t.notificationSayReceive :
      notificationStore.receive(action.payload)
      break;
      case t.notificationError :
        notificationStore.error(action.payload)
        break;
    }
  return next(null, action);
}
