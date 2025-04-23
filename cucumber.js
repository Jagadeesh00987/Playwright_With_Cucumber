module.exports = {
  default: {
    paths: ['src/tests/features/**/*.feature'],
    require: ['src/tests/steps/**/*.js', 'src/Supports/**/*.js'],
    formatOptions: {
      snippetInterface: 'async-await',
    },
    format: [
      'progress-bar',
      'html:test-results/cucumber-report.html',
      'json:test-results/cucumber-report.json',
      'rerun:@rerun.txt'
    ],
    tags: 'not @ignore',
    worldParameters: {},
    parallel: 2,
    retry: 0,
    timeout: 60000
  },

  smoke: {
    // Inherits everything from default, but overrides the tags
    tags: '@smoke',
  },

  regression: {
    tags: '@regression',
  }
};

