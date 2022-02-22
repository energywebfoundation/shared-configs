# `@energyweb/eslint-config`

Shared `eslint` configuration for Energy Web projects.

## Installation

Install package with npm

```bash
  npm install @energyweb/eslint-config --save-dev
```

and also peer dependencies

```bash
  npm install eslint eslint-config-prettier --save-dev
  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

## Usage/Examples

Create an `eslint` config file `.eslintrc.js` with following content

```javascript
module.exports = {
  extends: [
    "@energyweb",
  ],
  env: {
    // This value should be project dependent and should not be the same for all repos
    // https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
    browser: true,
    es2021: true,
    node: true
  },
};
```

## Support

For support contact [@Harasz](https://www.github.com/Harasz) or [@jrhender](https://www.github.com/jrhender).
