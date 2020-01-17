import TopicStore from '../stores/topic_store'
import { topicType as t, topicPrefix  } from '../actions/topic_action_type'

export function topicResolver(action, next) {
  if ( topicPrefix !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.add :
      TopicStore.add(action.payload)
      break;
    case t.delete :
      TopicStore.delete(action.payload)
      break;
    case t.getAll :
      TopicStore.setAll(action.payload)
      break;
    case t.getCurrent :
      TopicStore.set(action.payload)
      break;
    case t.activate :
      TopicStore.activate(action.payload)
      break;
    case t.deactivate :
      TopicStore.deactivate(action.payload)
      break;
    case t.error :
      TopicStore.error(action.payload)
      break;
    }
  return next(null, action);
}
