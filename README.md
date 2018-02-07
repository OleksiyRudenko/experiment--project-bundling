# Experiment - Project Bundling

I faced a few issues while building another project with
[Parcel, a Blazing fast, zero configuration web application bundler](https://parceljs.org/).

The one I didn't succeed in resolving to date has been a
`Uncaught ReferenceError: require is not defined` error in
browser dev console.

While app was functioning properly this error was just annoying.

The reason behind the error: browsers do not understand `require`.
The problem was that `require` somehow survived the building and
bundling process. Backtrace information wasn't much helpful.

Eventually I found a way of getting rid of the error. But it was
not 100% safe. Just to give you an impression: before fix the app
produced 16 `Uncaught reference` errors. After fix it produced
just one. Well, I was frustrated 'cause I've been expecting my method
would either totally fail or fix the issue 100%.

This project is an attempt to:
 1. Reproduce the issue
 2. Trace the issue reasons
 3. Compare building with [`parcel v1.5`](https://parceljs.org/)
    against building the same with
    [`webpack 3.10`](https://webpack.js.org/guides/getting-started/)

And here we go!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Steps](#steps)
  - [Initial situation](#initial-situation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Steps

### Initial situation

There is a web application implemented with
`index.html`, `style.css` and a bunch of scripts that
employ ES6 classes (a `.js` per class).
All scripts are loaded via `index.html` in proper order.

App OO model:
```
    Foo <--- FooTon
          \- FooGas
    Bar

```

To launch the app just open `src/index.html`.

The app runs smoothly.
