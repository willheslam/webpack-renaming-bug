export class Foo {
  test(){
    console.log('Expecting second:', Foo.value)
  }
}
Foo.value = 'second'

class Bar{
  test(){
    console.log('Another Bar class', Bar)
  }
}
