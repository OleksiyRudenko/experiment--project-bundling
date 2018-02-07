import Bar from './class.bar.js';
import FooTon from './class.footon.js';
import FooGas from './class.foogas.js';

const bar = new Bar(document.getElementById('bar'));
bar.render();

const footon = new FooTon(document.getElementById('footon'));
footon.render();

const foogas = new FooGas(document.getElementById('foogas'));
foogas.render();
