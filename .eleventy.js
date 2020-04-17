module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('components');
    eleventyConfig.addPassthroughCopy('includes');
    // eleventyConfig.addPassthroughCopy('images');

    // Returning something from the configuration function is optional
    return {
        dir: {
            input: 'inputs',
            includes: "includes",
            output: "docs",
        }, pathPrefix: "/web_docs/"
    };
};