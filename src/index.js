import { Foo } from './first'
import { Foo as SecondFoo } from './second'

new Foo().test() //expect 'first',
new SecondFoo().test() //expect 'second', actually get 'first'
