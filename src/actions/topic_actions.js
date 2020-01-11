import { dispatch } from '../resolvers/dispatcher'
import TopicService from '../services/topic_service';
import { topicTypes  as t } from './topic_action_type'

export class TopicActions {
  static topicGetAll() {
    dispatch( {
      type: t.topicGetAll,
      payload: function() {
        const service = TopicService.getInstance()
        service.getAll( TopicActions._topicGetAll , TopicActions.topicError);
      }
    })
  }

  static _topicGetAll(topics) {
    dispatch( {
      type: t.topicGetAll,
      payload: topics
    })
  }

  static topicGetCurrent() {
    dispatch( {
      type: t.topicGetCurrent,
      payload: function() {
        const service = TopicService.getInstance();
        service.getCurrent( TopicActions._topicGetCurrent , TopicActions.topicError);
      }
    })
  }

  static _topicGetCurrent(topic) {
    dispatch( {
      type: t.topicGetCurrent,
      payload: topic
    })
  }

  static topicAdd(topic) {
    dispatch( {
      type: t.topicAdd,
      payload: function() {
        const service = TopicService.getInstance()
        service.add( topic, TopicActions._topicAdd , TopicActions.topicError);
      }
    })
  }

  static _topicAdd(topic) {
    dispatch( {
      type: t.topicAdd,
      payload: topic
    })
  }

  static topicDelete(topic) {
    dispatch( {
      type: t.topicDelete,
      payload: function() {
        const service = TopicService.getInstance()
        service.delete( topic, TopicActions._topicDelete , TopicActions.topicError);
      }
    })
  }

  static _topicDelete(topic) {
    dispatch( {
      type: t.topicDelete,
      payload: topic
    })
  }

  static topicUpdate(topic) {
    dispatch( {
      type: t.topicUpdate,
      payload: function() {
        const service = TopicService.getInstance()
        service.update( topic, TopicActions._topicUpdate , TopicActions.topicError);
      }
    })
  }

  static _topicUpdate(topic) {
    dispatch( {
      type: t.topicUpdate,
      payload: topic
    })
  }

  static topicError(error) {
    dispatch( {
      type: t.topicError,
      payload: error
    })
  }
}
