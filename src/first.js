export class Foo{
  test(){
    console.log('Expecting first:', Foo.value)
  }
}
Foo.value = 'first'

class Bar{
  test(){
    console.log('Bar class:', Bar)
  }
}
