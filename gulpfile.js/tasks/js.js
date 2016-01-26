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
  buildDest: path.join(config.root.buildDest, config.tasks.js.dest),
  serveDest: path.join(config.root.serveDest, config.tasks.js.dest),
  entries: path.join(config.root.src, config.tasks.js.src, config.tasks.js.browserify.entries)
}

var scriptsTaskBase = function() {
  return browserify({
      "entries": paths.entries,
      "debug":config.tasks.js.browserify.debug
    })
    .transform("babelify")
    .bundle()
    .pipe(source(config.tasks.js.browserify.bundleName))
}

var scriptsTaskServe = function() {
  var stream = scriptsTaskBase();
  return stream
    .pipe(gulp.dest(paths.serveDest))
    .pipe(browserSync.stream())
}

var scriptsTaskBuild = function() {
  var stream = scriptsTaskBase();
  return stream
    .pipe(gulp.dest(paths.buildDest))
    .pipe(browserSync.stream())
}

gulp.task('js:serve', scriptsTaskServe);
gulp.task('js:build', scriptsTaskBuild);
module.exports = {
  'js:serve':scriptsTaskServe,
  'js:build':scriptsTaskBuild
}

