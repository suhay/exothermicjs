import { getGlobal } from 'reactn'

export default (content) => {
  let appliedContent = content

  if (appliedContent && typeof appliedContent === `string`) {
    const { options } = getGlobal()
    if (appliedContent) {
      Object.keys(options || []).forEach((key) => {
        appliedContent = appliedContent.replace(`{{${key}}}`, options[key])
      })
    }
  }

  return appliedContent
}
