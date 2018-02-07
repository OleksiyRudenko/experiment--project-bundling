export default class Foo {
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.name = 'Foo';
  }

  render() {
    this.htmlElement.innerHTML = 'I am ' + this.name;
  }
}
