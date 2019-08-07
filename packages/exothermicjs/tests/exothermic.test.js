import {
  configure, shallow,
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import React from 'react'

// import Spinner from '../src/components/util/spinner'
import { hydrate, render } from '../src'

configure({ adapter: new Adapter() })

const options = { pages: [`${__dirname}/../../../demo/public/pages/`, `${__dirname}/../templates/`], test: true }

test(`demo site renders`, () => {
  expect(render(`${options.pages[0]}index.exo`, options)).toContain(`Where - End of file!!`)
})

test(`hydrate returns content`, () => {
  expect(hydrate(`${options.pages[0]}index.exo`, options)).toContain(`Where - End of file!!`)
})

// test(`<Spinner>`, () => {
//   const wrapper = shallow(<Spinner />)
//   expect(wrapper.exists(`.sk-folding-cube`)).toBe(true)
// })
