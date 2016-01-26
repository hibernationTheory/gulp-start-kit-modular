var gulp            = require('gulp')
var $               = require('gulp-load-plugins')();

var defaultTask = function(cb) {
  $.sequence('clean:serve', 'css:serve', 'js:serve', 'html:serve', 'watch', cb);
}

gulp.task('default', defaultTask)
module.exports = defaultTask
