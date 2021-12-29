import { useContext, useEffect, useState } from 'react'
import yaml from 'js-yaml'

import { YamlTypes } from '../types/yaml'
import { state } from '../contexts/store'

export const useSchema = (): yaml.Schema => {
  const { store, dispatch } = useContext(state)
  const [yamlSchema, setSchema] = useState<yaml.Schema>()

  useEffect(() => {
    if (!store.schema) {
      const types: yaml.Type[] = (Object.keys(YamlTypes) || []).map((key) => YamlTypes[key])
      const schema = yaml.DEFAULT_SCHEMA.extend(types)
      setSchema(schema)
      dispatch({ type: 'SET_SCHEMA', schema })
    }
  }, [])

  return store.schema ?? yamlSchema
}
