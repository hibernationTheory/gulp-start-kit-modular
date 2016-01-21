var config       = require('../config')
if(!config.tasks.js) return

var gulp         = require('gulp')
var babelify     = require('babelify')
var browserify   = require('browserify')
var browserSync  = require('browser-sync')
var path         = require('path')
var source       = require('vinyl-source-stream')

var paths = {
  src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
  dest: path.join(config.root.buildDest, config.tasks.js.dest),
  entries: path.join(config.root.src, config.tasks.js.src, config.tasks.js.browserify.entries)
}

var scriptsTask = function() {
  return browserify({
      "entries": paths.entries,
      "debug":config.tasks.js.browserify.debug
    })
    .transform("babelify")
    .bundle()
    .pipe(source(config.tasks.js.browserify.bundleName))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('js', scriptsTask)
module.exports = scriptsTask

