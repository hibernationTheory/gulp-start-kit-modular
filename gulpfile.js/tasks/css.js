var config       = require('../config')
if(!config.tasks.css) return

var browserSync     = require('browser-sync')
var gulp            = require('gulp')
var path            = require('path')
var $               = require('gulp-load-plugins')();

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  buildDest: path.join(config.root.buildDest, config.tasks.css.dest),
  serveDest: path.join(config.root.serveDest, config.tasks.css.dest)
}

var cssBase = function () {
  return gulp.src(paths.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.tasks.css.sass))
    .on('error', $.sass.logError)
    .pipe($.autoprefixer(config.tasks.css.autoprefixer))
    .pipe($.sourcemaps.write());
}

var cssTaskTemp = function () {
  var stream = cssBase();
  return stream
    .pipe(gulp.dest(paths.serveDest))
    .pipe(browserSync.stream())
}

var cssTaskBuild = function () {
  var stream = cssBase();
  return stream
    .pipe(gulp.dest(paths.buildDest))
    .pipe(browserSync.stream())
}

gulp.task('css:serve', cssTaskTemp)
gulp.task('css:build', cssTaskBuild)

module.exports = {
  'css:serve':cssTaskTemp,
  'css:build':cssTaskBuild
}
