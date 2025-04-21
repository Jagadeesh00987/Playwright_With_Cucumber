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
      'rerun:@rerun.txt',
    ],
    tags: 'not @ignore',
    worldParameters: {},
    parallel: 2,
    retry: 1,
    import: [],
    timeout: 60000
  },
  smoke: {
    tags: '@smoke',
  },
  regression: {
    tags: '@regression',
    "report": "node scripts/generate-report.js"
  },
}

