/* eslint-disable no-use-before-define */
import React from 'react'

import { useState } from '~/hooks/useState'
import { AndPropType, IfPropType, OrPropType, Props } from './State.types'

function evaluateProp(item: IfPropType, state: Record<string, any>) {
  const keys = Object.keys(item)

  return keys.every((key) => {
    if (key === 'or') {
      return orCollection((item as OrPropType).or, state)
    }

    if (key === 'and') {
      return andCollection((item as AndPropType).and, state)
    }

    if (state[key] !== undefined) {
      if (typeof item[key] === 'boolean') {
        return !!state[key] === item[key]
      }
      return state[key] === item[key]
    }

    return false
  })
}

function orCollection(orProps: IfPropType[], state: Record<string, any>) {
  return orProps.some((item) => evaluateProp(item, state))
}

function andCollection(andProp: IfPropType[], state: Record<string, any>) {
  return andProp.every((item) => evaluateProp(item, state))
}

/**
 * The idea here is to only allow certain actions to be performed, or seen, when a certain state pair is met.
 * ``` yaml
 * - !state
 *   if:
 *     - login: true
 *     - or:
 *        - name: admin
 *        - and:
 *           - color: red
 *           - test: true
 *   then:
 *     - stuff
 *   else:
 *     - other stuff
 *```
 *
 * `if (login === true && (name === 'admin' || (color === 'red' && test == 'true)))`
 */

export function State({ if: ifProp, then: thenProp, else: elseProp }: Props): JSX.Element {
  const state = useState((st) => st.state)
  const stateCheck = React.useMemo(() => andCollection(ifProp, state), [ifProp, state])

  if (stateCheck) {
    return <>{thenProp}</>
  }

  return <>{elseProp ?? null}</>
}
