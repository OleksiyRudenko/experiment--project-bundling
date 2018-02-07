class Bar {
  constructor(htmlElement) {
    this.htmlElement = htmlElement;
    this.name = 'Bar';
  }

  render() {
    this.htmlElement.innerHTML = 'Ich bin <b>' + this.name + '</b>';
  }
}
