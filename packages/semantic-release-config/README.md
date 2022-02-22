# `@energyweb/semantic-release-config`

Shared `semantic-release` configuration for Energy Web projects.

## Installation

Install package with npm

```bash
  npm install @energyweb/semantic-release-config --save-dev
```

and also peer dependencies

```bash
  npm install semantic-release @semantic-release/changelog --save-dev
  npm install @semantic-release/git @semantic-release/github @semantic-release/npm --save-dev
  npm install @semantic-release/commit-analyzer @semantic-release/release-notes-generator --save-dev
```

## Usage/Examples

Create a `semantic-release` config file `.releaserc.js` with following content

```javascript
module.exports = {
  branches: [
    {
      name: "master",
      channel: "latest"
    },
    {
      name: "develop",
      prerelease: "alpha",
      channel: "canary"
    }
  ],
  repositoryUrl: "<YOUR_REPO_URL>",
  extends: "@energyweb/semantic-release-config",
};
```

## Support

For support contact [@Harasz](https://www.github.com/Harasz) or [@jrhender](https://www.github.com/jrhender).
