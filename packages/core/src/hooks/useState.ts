import create from 'zustand'

type StateHook = {
  state: Record<string, any>
  setState: (key: string, val: any) => void
}

export const useState = create<StateHook>((set, get) => ({
  state: {},
  setState: (key: string, val: any) => {
    const oldState = get().state
    oldState[key] = val
    set({ state: { ...oldState } })
  },
  clear: (key?: string) => {
    const oldState = get().state

    if (key != null) {
      if (oldState[key] !== undefined) {
        delete oldState[key]
        set({ state: { ...oldState } })
      }
      return
    }

    set({ state: {} })
  },
}))
