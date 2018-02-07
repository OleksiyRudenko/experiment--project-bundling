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
## Table of Contents

- [Steps](#steps)
  - [Initial situation](#initial-situation)
  - [Targets](#targets)

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

To launch the app:
 1. open `src/index.html` in your browser

Publishing on [github.io](https://github.io/)
 1. `git checkout gh-pages`
    (make sure `gh-pages` branch exists; if not then either pull it
    from the repo or employ `-b` option)
 2. `git merge as-is`
 3. `git push`
 4. navigate to `your-github-id.github.io/repo-name/src/`
    (e.g. [OleksiyRudenko.github.io/experiment--project-bundling/src/](/experiment--project-bundling/src/))

The app runs smoothly.

[_-- back to TOC --_](#table-of-contents)

### Targets

Our app may be quite big with lots of JS spread across many
script files, many assets etc. So we want to:
 - bundle all `.js` into a single script to save on `http` requests
 - bundle all app styles into a single `.css`
   (probably, with the only exception when we want to split those
   per media queries)
   to save on `http` requests
 - lint all the code
 - make our ES6 compliant JS code compatible with the majority
   of browsers
 - minify `.html`, `.js` and `.css`
 - manage assets efficiently
 - conduct auto-tests etc.

So, we need to employ app building tools: code bundlers, linters,
transpilers, minifiers etc.

Today [Feb 2018] popular options to choose among are:
 - [webpack](https://webpack.js.org/)
 - [browserify](http://browserify.org/)
 - [rollup](https://rollupjs.org/guide/en)
 - [parcel](https://parceljs.org/)
 - [gulp](https://gulpjs.com/)
 - [grunt](https://gruntjs.com/)
 - [babel](https://babeljs.io/)
 - [uglify-es](https://www.npmjs.com/package/uglify-es)
 - [autoprefixer](https://www.npmjs.com/package/autoprefixer)
 - [PostCSS](http://postcss.org/)
 - [PostHTML](https://github.com/posthtml/posthtml)
 - et al

Some of the above are employed as plugins to bundlers/builders,
so packages specific to that or other builder/bundler may be required.

For the purpose of this experiment we shall employ:
 - [NodeJS](https://nodejs.org/) as a core platform
 - [yarn](https://yarnpkg.com/) to manage dependencies
   (alternative is `npm`, which comes bundled with `node`)
 - `webpack` and `parcel` as bundlers, each under its own branch set
 - `babel`, `autoprefixer` and some other plugins to transform
   the code to meet targets

Next steps described under assumption that you have `node`, `yarn`,
`parcel`, and `webpack` installed globally.

[_-- back to TOC --_](#table-of-contents)
