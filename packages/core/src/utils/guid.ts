export const guid = () => `_${Math.random().toString(36).substring(2, 11)}`

export const hexGuid = (input: string, limit = 8) => {
  let result = ''
  for (let i = 0; i < input.length; i += 1) {
    const hex = input.charCodeAt(i).toString(16)
    result += `000${hex}`.slice(-4)
    if (result.length > limit) {
      break
    }
  }

  return result
}
