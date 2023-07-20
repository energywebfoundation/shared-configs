module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "docs", release: "patch" },
          { type: "style", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        // https://github.com/semantic-release/release-notes-generator#configuration
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        // available options are https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md
        presetConfig: {
          types: [
            { type: "feat", section: "Features" },
            { type: "fix", section: "Bug Fixes" },
            { type: "docs", section: "Documentation" },
            { type: "style", section: "Style changes" },
            { type: "refactor", section: "Refactoring" },
            { type: "perf", section: "Performance improvements" },
            { type: "test", hidden: true },
            { type: "chore", hidden: true },
            { type: "ci", hidden: true },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "docs/CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]"
      },
    ],
  ],
};
