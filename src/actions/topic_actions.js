import { dispatch } from '../resolvers/dispatcher'
import TopicService from '../services/topic_service';
import { topicType  as t } from './topic_action_type'

export class TopicAction {
  static getAll() {
    dispatch( {
      type: t.getAll,
      payload: function() {
        TopicService.getInstance().getAll( TopicAction._getAll , TopicAction.error);
      }
    })
  }

  static _getAll(topics) {
    dispatch( {
      type: t.getAll,
      payload: topics
    })
  }

  static getCurrent() {
    dispatch( {
      type: t.getCurrent,
      payload: function() {
        TopicService.getInstance().getCurrent( TopicAction._getCurrent , TopicAction.error);
      }
    })
  }

  static _getCurrent(topic) {
    dispatch( {
      type: t.getCurrent,
      payload: topic
    })
  }

  static add(topic) {
    dispatch( {
      type: t.add,
      payload: function() {
        TopicService.getInstance().add( topic, TopicAction._add , TopicAction.error);
      }
    })
  }

  static _add(topic) {
    dispatch( {
      type: t.add,
      payload: topic
    })
  }

  static delete(topic) {
    dispatch( {
      type: t.delete,
      payload: function() {
        TopicService.getInstance().delete( topic, TopicAction._delete , TopicAction.error);
      }
    })
  }

  static _delete(topic) {
    dispatch( {
      type: t.topicDelete,
      payload: topic
    })
  }

  static update(topic) {
    dispatch( {
      type: t.update,
      payload: function() {
        TopicService.getInstance().update( topic, TopicAction._update , TopicAction.error);
      }
    })
  }

  static _update(topic) {
    dispatch( {
      type: t.update,
      payload: topic
    })
  }

  static error(error) {
    dispatch( {
      type: t.error,
      payload: error
    })
  }
}
