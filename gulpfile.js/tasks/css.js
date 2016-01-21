var config       = require('../config')
if(!config.tasks.css) return

var browserSync     = require('browser-sync')
var gulp            = require('gulp')
var path            = require('path')
var $               = require('gulp-load-plugins')();

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.buildDest, config.tasks.css.dest)
}

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass(config.tasks.css.sass))
    .on('error', $.sass.logError)
    .pipe($.autoprefixer(config.tasks.css.autoprefixer))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
