var gulp            = require('gulp')
var $               = require('gulp-load-plugins')();

var defaultTask = function(cb) {
  $.sequence('clean', 'css', 'js', 'html', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
