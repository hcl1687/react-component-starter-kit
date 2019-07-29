import '@babel/polyfill'

describe('e2e test', () => {
  beforeEach(async () => {
    await page.goto(PATH, { waitUntil: 'load' })
  })
  it('should have class "simple"', async () => {
    const className = await page.$eval('#app > div', element => element.className)
    console.log(className)
    expect(className).toBe('simple')
  }, 16000)
})
