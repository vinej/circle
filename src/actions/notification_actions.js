import { dispatch } from '../resolvers/dispatcher'
import { notificationType  as t } from './notification_action_type'
import NotificationService from '../services/notification_service'

// must use static method to pass them as callback
export class NotificationAction {

  static saySend(something) {
    console.log("say called", something);
    dispatch( {
      type: t.saySend,
      payload: function() {
        const service = NotificationService;
        service.say(something, NotificationAction._saySend , NotificationAction.error);
      }
    })
  }

  static _saySend(something) {
    dispatch( {
      type: t.saySend,
      payload: something
    })
  }

  static sayReceive(something) {
    dispatch( {
      type: t.sayReceive,
      payload: something
    })
  }

  static error(error) {
    dispatch( {
      type: t.error,
      payload : error
    })
  }
}
