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
    if (val == null || exoContent != null) {
      return
    }

    const combinedKey = prevKey ? `${prevKey}.${key}` : key

    if (typeof val === 'object') {
      if (isValidElement(val)) {
        exoContent = val
        return
      }
      if (isFragment(val)) {
        return
      }

      const newContent = applyTemplate(template, val as Record<string, object>, combinedKey)
      content = newContent ?? content
    }

    const reg = `{{\\s*${combinedKey.replace('$', '\\$')}(?!\\.)[ |]+.*?}}`
    const exp = new RegExp(reg)
    const expg = new RegExp(reg, 'g')
    const templatePartsToReplace = content.match(exp)
    let replaceVal = val

    if (templatePartsToReplace?.length) {
      const parts = templatePartsToReplace[0].replace(/{{|}}/g, '').split('|')

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
    if (typeof replaceVal === 'string') {
      content = content.replace(expg, replaceVal)
    }
  })

  if (exoContent) {
    return exoContent
  }

  return prevKey != null ? content.replace(/\s*{{.*?}}/g, '') : content
}
