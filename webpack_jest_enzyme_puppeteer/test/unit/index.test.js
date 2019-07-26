import { render, shallow } from 'enzyme'
import React from 'react'
import SimpleComp from '../../src/index.jsx'

describe('test react component', function () {
  it('test 1', () => {
    const text = 'Hello'
    const className = 'hello'
    const app = shallow(<SimpleComp className={className} value={text} />)
    expect(app.find('.hello').text()).toEqual(text)
  })
  it('test 2', () => {
    const text = 'Hello'
    const className = 'hello1'
    const app = render(<SimpleComp className={className} value={text} />)
    expect(app.text()).toEqual(text)
  })
})
