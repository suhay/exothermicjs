import yaml from 'js-yaml'
import create from 'zustand'

type SchemaHook = {
  schema: yaml.Schema
  extendSchema: (schema: yaml.Type) => void
  setSchema: (schema: yaml.Schema) => void
}

export const useSchema = create<SchemaHook>((set, get) => ({
  schema: yaml.DEFAULT_SCHEMA,
  extendSchema: (schema: yaml.Type) => {
    const newSchema = get().schema.extend(schema)
    set({ schema: newSchema })
  },
  setSchema: (schema: yaml.Schema) => {
    set({ schema })
  },
}))
