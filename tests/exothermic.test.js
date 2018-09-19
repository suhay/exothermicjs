import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme'
import Spinner from '../src/components/util/Spinner'
import React from 'react'

var Exothermic = require("../src/exothermic")
var path = require('path')

var pages = path.resolve(__dirname, '../demo/public/pages')

test('demo site renders', () => {
  expect(Exothermic.build('/', pages)).toContain('Where - End of file!!')
});

test('bedew returns content', () => {
  expect(Exothermic.bedew('/', pages)).toContain('Where - End of file!!')
})

test('<Spinner>', () => {
  const wrapper = shallow(<Spinner />)
  expect(wrapper.exists('.sk-folding-cube')).toBe(true)
})