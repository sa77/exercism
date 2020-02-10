import HelloWorld from "./hello-world"

describe('Hello World', () => {

  it('says hello world with no name', () => {
    expect(HelloWorld.hello()).toEqual('Hello, World!')
  })

  it('says hello world to Bob', () => {
    expect(HelloWorld.hello('Bob')).toEqual('Hello, Bob!')
  })

  it('says hello world to Sally', () => {
    expect(HelloWorld.hello('Sally')).toEqual('Hello, Sally!')
  })

})
