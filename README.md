# Express ESLit [<img src="https://jonathantneal.github.io/express-eslit/express-logo.svg" alt="" width="90" height="90" align="right">][Express]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]

[Express ESLit] is a [Express] plugin that lets you create templates with
embedded JavaScript expressions using [ESLit].

```jsx
<!-- views/index.html -->
<h1>${ heading }</h1>
<table>
  ${ people.map((person) => `<tr>
    <td>${ person.given }</td>
    <td>${ person.family }</td>
  </tr>`) }
</table>
```

ESLit templates are easy to use because they’re nothing more than web
standardized [ES6 Template Strings] with [Promise] support.

```js
import express from 'express';
import eslit from 'express-eslit';

const app = express();

app.engine('html', eslit);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index', {
    locals: {
      heading: Promise.resolve('Guest List'),
      people: [{
        given: 'Martin',
        family: 'Brody'
      }, {
        given: 'Bruce',
        family: 'Shark'
      }]
    }
  });
});

app.listen(8080);
```

Keeps things simple.

```html
<h1>Guest List</h1>
<table>
  <tr>
    <td>Martin</td>
    <td>Brody</td>
  </tr><tr>
    <td>Bruce</td>
    <td>Shark</td>
  </tr>
</table>
```

## Usage

Add [Express ESLit] to your build tool.

```sh
npm install express-eslit --save-dev
```

```js
import eslit from 'express-eslit';

app.engine('html', eslit);

res.render('index', {
  locals: { /* data */ },
  options: { /* options */ }
});
```

- **data**: the keys used as variables by the template.
- Options
  - **cwd**: the path used by imports (default: `process.cwd()`).
  - **prefixes**: the file prefixes sometimes used by imports (default: `[ "_" ]`).
  - **extensions**: the file extensions sometimes used by imports (default: `[ ".html", ".jsx" ]`).
  - **globopts**: the options passed into [node-glob].

*Notes*:

- *Paths are relative to the current file or the current working directory.*
- *Paths may use glob patterns or omit prefixes and extensions*
- *Node modules are supported, using the package `template` or `main` keys, or by using `index.html`*

---

## Syntax Helpers

##### Sublime Text

1. Install the **[Babel](https://packagecontrol.io/packages/Babel)** Package.
2. Select **Tools** > **Developer** > **New Syntax**.
3. Paste [this syntax].
4. Save the file as `Lit Template (Babel).sublime-syntax`.

[Express ESLit]: https://github.com/jonathantneal/express-eslit
[ESLit]: https://github.com/jonathantneal/eslit
[ES6 Template Strings]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[Express]: https://expressjs.com/
[Promise]: https://www.promisejs.org/
[node-glob]: https://github.com/isaacs/node-glob
[this syntax]: https://github.com/jonathantneal/eslit/blob/master/Lit%20Template%20(Babel).sublime-syntax

[npm-url]: https://www.npmjs.com/package/express-eslit
[npm-img]: https://img.shields.io/npm/v/express-eslit.svg
[cli-url]: https://travis-ci.org/jonathantneal/express-eslit
[cli-img]: https://img.shields.io/travis/jonathantneal/express-eslit.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/express-eslit.svg
