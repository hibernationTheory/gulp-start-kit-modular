var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')

var defaultTask = function(cb) {
  gulpSequence('clean', 'css', 'static', 'watch', cb)
}

gulp.task('default', defaultTask)
module.exports = defaultTask