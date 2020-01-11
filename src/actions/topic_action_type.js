// same name of the type is the name of the function, but with a underscore. The pattern need that
export let topicPrefixType = 'topic_'

export let topicTypes = {
  topicAdd         : topicPrefixType + 'Add',
  topicDelete      : topicPrefixType + 'Delete',
  topicUpdate      : topicPrefixType + 'Update',
  topicActivate    : topicPrefixType + 'Activate',
  topicDeActivate  : topicPrefixType + 'DeActivate',
  topicGetAll      : topicPrefixType + 'GetAll',
  topicGetCurrent  : topicPrefixType + 'GetCurrent',
  topicError       : topicPrefixType + 'Error'
}
