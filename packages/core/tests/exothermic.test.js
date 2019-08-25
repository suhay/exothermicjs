import {
  configure, shallow,
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import * as Aphrodite from 'aphrodite'
import * as AphroditeNoImportant from 'aphrodite/no-important'

import Spinner from '../src/components/util/spinner'
import { hydrate, render } from '../src/server'

Aphrodite.StyleSheetTestUtils.suppressStyleInjection()
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection()

configure({ adapter: new Adapter() })

const options = { pages: [`${__dirname}/../../../demo/public/pages/`, `${__dirname}/../templates/`], test: true }

describe(`server`, () => {
  test(`demo site renders`, () => {
    expect(render(`${options.pages[0]}index.exo`, options)).toContain(`Where - End of file!!`)
  })
  
  test(`hydrate returns content`, () => {
    expect(hydrate(`${options.pages[0]}index.exo`, options)).toContain(`Where - End of file!!`)
  })
})

describe(`components`, () => {
  describe(`<Spinner>`, () => {
    it(`renders`, () => {
      expect(shallow(<Spinner />).contains(<div className="sk-cube1 sk-cube" />)).toBe(true)
    })
  })  
})
