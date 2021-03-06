module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      "measure-pivot-distance.js",
      "measure-pivot-distance.spec.js"
    ],
    frameworks: [
      "jasmine"
    ],
    reporters: [
      "mocha",
      "coverage"
    ],
    browsers: [
      "PhantomJS"
    ],
    preprocessors: {
      "measure-pivot-distance.js": ["coverage"]
    }
  });
};