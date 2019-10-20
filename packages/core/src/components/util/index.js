import yaml from 'js-yaml'


export const key = (item, i = 0) => Object.keys(item)[i]

export const val = (item, i = 0) => item[Object.keys(item)[i]]

export const isBrowser = (() => typeof window !== `undefined` && window.document !== undefined)()

export const dump = (data) => {
  const { description, tags, page } = data.props.data
  return `---\n${yaml.dump({
    description,
    tags,
    page: page.map((part) => dumpTag(part)),
  }).replace(/tag: '!(.*)'/g, `!$1`)}`
}

export const dumpTag = (tag) => {
  if (tag._self && tag._self.represent) {
    return tag._self.represent(tag.props.data || tag.props)
  }

  const data = !tag.props.data ? !tag.props.children ? tag.props : tag.props.children.props.data : tag.props.data
  const rtn = { tag: `${tag._self ? tag._self.tag : ``}`, ...data }

  if (!rtn.items && tag.props.children) {
    rtn.items = tag.props.children.props.items
  }

  if (rtn.items) {
    rtn.items = rtn.items.map((item) => item._self ? dumpTag(item) : item)
  }
  if (rtn.content) {
    rtn.content = rtn.content._self ? dumpTag(rtn.content) : rtn.content
  }
  return rtn
}

export const dumpFragment = (tag) => {
  if (tag.items) {
    return `---\n${yaml.dump({
      items: tag.items.map((item) => dumpTag(item)),
    }).replace(/tag: '!(.*)'/g, `!$1`)}`
  }

  return `---\n${yaml.dump({
    content: dumpTag(tag.content),
  }).replace(/tag: '!(.*)'/g, `!$1`)}`
}
