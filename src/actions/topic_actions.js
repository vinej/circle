import { dispatch } from '../resolvers/dispatcher'
import TopicService from '../services/topic_service';
import { topicTypes  as t } from './topic_action_type'

export class TopicActions {
  static topicGetAll() {
    dispatch( {
      type: t.topicGetAll,
      payload: function() {
        const service = TopicService.getInstance()
        service.getAll( topicActions._topicGetAll , topicActions.topicError);
      }
    })
  }

  static _topicGetAll(topics) {
    dispatch( {
      type: t.topicGetAll,
      payload: topics
    })
  }

  static topicAdd(topic) {
    dispatch( {
      type: t.topicAdd,
      payload: function() {
        const service = TopicService.getInstance()
        service.topicAdd( topicActions._topicAdd , topicActions.topicError);
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
        service.topicDelete( topicActions._topicDelete , topicActions.topicError);
      }
    })
  }

  static _topicDelete(topic) {
    dispatch( {
      type: t.topicDelete,
      payload: topic
    })
  }

  static topicActivate(topic) {
    dispatch( {
      type: t.topicActivate,
      payload: function() {
        const service = TopicService.getInstance()
        service.topicActivate( topicActions._topicActivate , topicActions.topicError);
      }
    })
  }

  static _topicActivate(topic) {
    dispatch( {
      type: t.topicActivate,
      payload: topic
    })
  }

  static topicDeActivate(topic) {
    dispatch( {
      type: t.topicDeActivate,
      payload: function() {
        const service = TopicService.getInstance()
        service.topicDeActivate( topicActions._topicDeActivate , topicActions.topicError);
      }
    })
  }

  static _topicDeActivate(topic) {
    dispatch( {
      type: t.topicActivate,
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
