import yaml from 'js-yaml'
import create from 'zustand'

import { YamlTypes } from '../types/yaml'

type SchemaHook = {
  schema: yaml.Schema
  extendSchema: (schema: yaml.Type) => void
}

export const useSchema = create<SchemaHook>((set, get) => ({
  schema: yaml.DEFAULT_SCHEMA,
  extendSchema: (schema: yaml.Type) => {
    const newSchema = get().schema.extend(schema)
    set({ schema: newSchema })
  },
}))

const types: yaml.Type[] = (Object.keys(YamlTypes) || []).map((key) => YamlTypes[key])
const schema = yaml.DEFAULT_SCHEMA.extend(types)
useSchema.setState({ schema })
