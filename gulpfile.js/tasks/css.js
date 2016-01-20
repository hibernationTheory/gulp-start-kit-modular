var config       = require('../config')
if(!config.tasks.css) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var changed      = require('gulp-changed')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var path         = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  dest: path.join(config.root.buildDest, config.tasks.css.dest)
}

var cssTask = function () {
  return gulp.src(paths.src)
    //.pipe(changed(paths.dest)) //might need to be newer instead since many to one mapping?
    .pipe(sourcemaps.init())
    .pipe(sass(config.tasks.css.sass))
    .on('error', sass.logError)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
