import { dispatch } from '../resolvers/dispatcher'
import { notificationTypes  as t } from './notification_action_type'
import NotificationService from '../services/notification_service'

// must use static method to pass them as callback
export class NotificationActions {

  static notificationSaySend(something) {
    console.log("say called", something);
    dispatch( {
      type: t.notificationSaySend,
      payload: function() {
        const service = NotificationService;
        service.say(something, NotificationActions._notificationSaySend , NotificationActions.notificationError);
      }
    })
  }

  static _notificationSaySend(something) {
    dispatch( {
      type: t.notificationSaySend,
      payload: something
    })
  }

  static notificationSayReceive(something) {
    dispatch( {
      type: t.notificationSayReceive,
      payload: something
    })
  }

  static notificationError(error) {
    dispatch( {
      type: t.notificationError,
      payload : error
    })
  }
}
