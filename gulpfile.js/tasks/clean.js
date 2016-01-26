var gulp   = require('gulp')
var del    = require('del')
var config = require('../config')

var cleanTaskServe = function () {
  return del([config.root.serveDest])
}

var cleanTaskBuild = function () {
  return del([config.root.buildDest])
}

gulp.task('clean:serve', cleanTaskServe)
gulp.task('clean:build', cleanTaskBuild)

module.exports = {
    'clean:serve':cleanTaskServe,
    'clean:build':cleanTaskBuild
}
