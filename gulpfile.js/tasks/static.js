var config  = require('../config')
var gulp    = require('gulp')
var path    = require('path')
var $       = require('gulp-load-plugins')();

var paths = {
  src: path.join(config.root.src, config.tasks.static.src, '/**'),
  serveDest: path.join(config.root.serveDest, config.tasks.static.dest),
  buildDest: path.join(config.root.buildDest, config.tasks.static.dest)
}

var staticTaskBase = function() {
  return gulp.src(paths.src)
    .pipe($.changed(paths.dest)) // Ignore unchanged files
}

var staticTaskServe = function() {
    var stream = staticTaskBase();
    return stream
        .pipe(gulp.dest(paths.serveDest))
}

var staticTaskBuild = function() {
    var stream = staticTaskBase();
    return stream
        .pipe(gulp.dest(paths.buildDest))
}

gulp.task('static:serve', staticTaskServe)
gulp.task('static:build', staticTaskBuild)
module.exports = {
    'static:serve':staticTaskServe,
    'static:build':staticTaskBuild
}
