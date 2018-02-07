import Foo from './class.foo.js';

export default class FooTon extends Foo {
  constructor(htmlElement) {
    super(htmlElement);
    this.name += 'Ton';
  }
}
