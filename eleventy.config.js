module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/**/images/*.{jpg,png,gif,svg}");
    eleventyConfig.addPassthroughCopy("src/resources/**/*.pdf");

    eleventyConfig.addPlugin(require("@jamshop/eleventy-plugin-typography"));

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
        },
        htmlTemplateEngine: "njk",
    };
};
