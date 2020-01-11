import topicStore from '../stores/topic_store'
import { topicTypes as t, topicPrefixType  } from '../actions/topic_action_type'

export function topicResolver(action, next) {
  if ( topicPrefixType !== action.prefixType ) {
    return next(null, action);
  }

  switch(action.type) {
    case t.topicAdd :
      topicStore.add(action.payload)
      break;
    case t.topicDelete :
      topicStore.delete(action.payload)
      break;
    case t.topicGetAll :
      topicStore.setAll(action.payload)
      break;
    case t.topicGetCcurrent :
      topicStore.set(action.payload)
      break;
    case t.topicActivate :
      topicStore.activate(action.payload)
      break;
    case t.topicDeActivate :
      topicStore.deactivate(action.payload)
      break;
    case t.topicError :
      topicStore.error(action.payload)
      break;
    }
  return next(null, action);
}
