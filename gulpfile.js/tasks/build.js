var gulp            = require('gulp')
var $               = require('gulp-load-plugins')();

var buildTask = function(cb) {
  $.sequence('clean:build', 'css:build', 'js:build', 'html:build', cb);
}

gulp.task('build', buildTask)
module.exports = buildTask
