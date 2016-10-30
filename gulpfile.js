// Imports dependencies.
const gulp = require('gulp');
const exec = require('child_process').exec;

// Runs the default task.
gulp.task('default', ['test']);

// Runs the test command with mocha
gulp.task('test', () => {
  exec('npm test', (error, stdout, stderr) => {
    console.log(`stdout: ${stderr}`);
    console.log(`stdout: ${stdout}`);
  });
});

// Watches for changes and reloads the app.
gulp.watch(['api/**/*.js', 'test/**/*.js'], ['test']);
