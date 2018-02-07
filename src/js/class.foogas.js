import Foo from './class.foo.js';

export default class FooGas extends Foo {
  constructor(htmlElement) {
    super(htmlElement);
    this.name += '<b>Gas</b>';
  }
}
