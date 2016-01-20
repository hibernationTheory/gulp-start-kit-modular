var config       = require('../config')
if(!config.tasks.js) return

var gulp         = require('gulp')
var babelify     = require('babelify')
var browserify   = require('browserify')
var browserSync  = require('browser-sync')
var changed      = require('gulp-changed')
var path         = require('path')
var source       = require('vinyl-source-stream')

var paths = {
    src: path.join(config.root.src, config.tasks.js.src, '/**/*.{' + config.tasks.js.extensions + '}'),
    dest: path.join(config.root.buildDest, config.tasks.js.dest)
}

var scriptsTask = function() {
    // need to use the gulp changed here
    return browserify(config.tasks.browserify)
        .bundle()
        .pipe(source(config.tasks.browserify.bundleName))
        .pipe(gulp.dest(paths.dest))
        .pipe(browserSync.stream())
}

gulp.task('js', scriptsTask)
module.exports = scriptsTask

