module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('_components');
    eleventyConfig.addPassthroughCopy('_includes');
    // eleventyConfig.addPassthroughCopy('images');

    // Returning something from the configuration function is optional
    return {
        dir: {
            input: '_inputs',
            includes: "_includes",
            output: "docs"
        }
    };
};