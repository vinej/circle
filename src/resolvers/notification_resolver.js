import NotificationStore from '../stores/notification_store'
import { notificationType as t, notificationPrefix  } from '../actions/notification_action_type'

export function notificationResolver(action, next) {
  if ( notificationPrefix !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.saySend :
      NotificationStore.send(action.payload)
      break;
    case t.sayReceive :
      NotificationStore.receive(action.payload)
      break;
    case t.error :
      NotificationStore.error(action.payload)
      break;
  }
  return next(null, action);
}
