import { ReactFragment, isValidElement, ReactNode } from 'react'
import { DateTime } from 'luxon'

const isFragment = (obj: any): obj is ReactFragment => 'next' in obj

export function applyTemplate(
  template: string,
  data: Record<string, ReactNode | object>,
  prevKey?: string,
) {
  if (!template) {
    return null
  }

  let content = template
  let exoContent: ReactNode = null

  Object.entries(data).forEach(([key, val]) => {
    if (val == null) {
      return
    }

    const combinedKey = prevKey ? `${prevKey}.${key}` : key

    if (typeof val === 'object') {
      if (isFragment(val)) {
        return
      }
      if (!isValidElement(val)) {
        const newContent = applyTemplate(content, val as Record<string, object>, combinedKey)
        content = newContent ?? content
      }
    }

    const reg = `{{\\s*${combinedKey.replace('$', '\\$')}(?!\\.)[ |]+.*?}}`
    const exp = new RegExp(reg)
    const expg = new RegExp(reg, 'g')
    const templatePartsToReplace = content.match(exp)
    let replaceVal = val

    if (templatePartsToReplace?.length) {
      console.log(templatePartsToReplace)
      console.log(replaceVal)
      const parts = templatePartsToReplace[0].replace(/{{|}}/g, '').split('|')

      if (isValidElement(val)) {
        exoContent = val
        return
      }

      if (parts.length >= 3) {
        switch (parts[1].trim()) {
          case 'dateTime':
            if (typeof replaceVal === 'string') {
              replaceVal = DateTime.fromISO(replaceVal).toFormat(parts[2].trim())
            }
            break
          default:
            break
        }
      }
    }
    console.log(content)
    if (typeof replaceVal === 'string') {
      content = content.replace(expg, replaceVal)
    }
    console.log(content)
  })

  if (exoContent) {
    return exoContent
  }

  return prevKey == null ? content.replace(/\s*{{.*?}}/g, '') : content
}
