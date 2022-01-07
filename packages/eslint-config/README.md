# `@energyweb/eslint-config`

Shared `eslint` configuration for Energy Web projects.

## Installation

Install package with npm

```bash
  npm install @energyweb/eslint-config
```

and also peer dependencies

```bash
  npm install eslint eslint-config-prettier
  npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage/Examples

Create an `eslint` config file `.eslintrc.js` with fallowing content

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
