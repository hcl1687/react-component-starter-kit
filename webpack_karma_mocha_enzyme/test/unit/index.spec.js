import React from 'react'
import SimpleComp from '../../src/index.jsx'

const { expect, render, shallow } = TEST_UTILS

describe('test react component', function () {
  it('test 1', () => {
    const text = 'Hello'
    const className = 'hello'
    const app = shallow(<SimpleComp className={className} value={text} />)
    expect(app.find('.hello').text()).to.be.equal(text)
  })
  it('test 2', () => {
    const text = 'Hello'
    const className = 'hello1'
    const app = render(<SimpleComp className={className} value={text} />)
    expect(app.text()).to.be.equal(text)
  })
})
