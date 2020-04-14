module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_components");
  return {
    passthroughFileCopy: true,
  };
};
