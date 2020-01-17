// same name of the type is the name of the function, but with a underscore. The pattern need that
export let topicPrefix = 'topic_'

export let topicType = {
  add         : topicPrefix + 'add',
  delete      : topicPrefix + 'delete',
  update      : topicPrefix + 'update',
  activate    : topicPrefix + 'activate',
  deActivate  : topicPrefix + 'deActivate',
  getAll      : topicPrefix + 'getAll',
  getCurrent  : topicPrefix + 'getCurrent',
  error       : topicPrefix + 'error'
}
