var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

var defaultTask = function(cb) {
  gulpSequence('clean', 'css', 'js', 'html', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask
