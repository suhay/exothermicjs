import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import { shallow, mount, render } from 'enzyme'
import Spinner from '../src/components/util/Spinner'
import React from 'react'

var Exothermic = require("../src/exothermic")
var path = require('path')

var options = { _pages: [__dirname + '/../demo/public/pages/', __dirname + '/../templates/'] }

test('demo site renders', () => {
  expect(Exothermic.build(options._pages[0] + 'index.exo', options)).toContain('Where - End of file!!')
})

test('bedew returns content', () => {
  expect(Exothermic.hydrate(options._pages[0] + 'index.exo', options)).toContain('Where - End of file!!')
})

test('<Spinner>', () => {
  const wrapper = shallow(<Spinner />)
  expect(wrapper.exists('.sk-folding-cube')).toBe(true)
})