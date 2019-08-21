import { getGlobal } from 'reactn'

export default (content) => {
  let appliedContent = content
  const { options } = getGlobal()
  
  if (appliedContent) {
    Object.keys(options || []).forEach((key) => {
      appliedContent = appliedContent.replace(`{{${key}}}`, options[key])
    })
  }

  return appliedContent
}
