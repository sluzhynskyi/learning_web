module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("components");
  return {
    passthroughFileCopy: true,
  };
};
