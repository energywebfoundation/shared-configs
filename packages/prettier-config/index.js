module.exports = {
  /**
   * proseWrap: "never" is because we want to make it easier for developers to rely on their
   * editor's auto-wrapping to edit markdown files.
   */
  proseWrap: "never",
  
  /**
   * singleQuote: true is for a few reasons:
   * - It allows double quotes to be used in the string without escaping
   * - It is 1-keys vs 2-keys to type
   * - Other projects use it as well:
   *      - EWF Origin 
   *      - Rush's suggested styling itself: https://rushjs.io/pages/maintainer/enabling_prettier/
   */
  singleQuote: true,
};
