var config       = require('../config')
if(!config.tasks.html) return

var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var path         = require('path')
var requireGlob  = require('require-glob')
var $            = require('gulp-load-plugins')();

var paths = {
  src: path.join(config.root.src, config.tasks.html.nunjucks.pages, '/**/*.nunjucks'),
  buildDest: config.root.buildDest,
  serveDest: config.root.serveDest,
  partials: path.join(config.root.src, config.tasks.html.nunjucks.partials),
  data: path.join(config.root.src, config.tasks.html.nunjucks.data, '/**/*.{js,json}'),
}

var htmlTaskBase = function() {
  $.nunjucksRender.nunjucks.configure([paths.partials], {watch: false});
  var dataObj = requireGlob.sync(paths.data);

  return gulp
    .src(paths.src)
    .pipe($.data(function() {
        return dataObj;
    }))
    .pipe($.frontMatter({property: 'data.frontMatter'}))
    .pipe($.nunjucksRender())
    .pipe($.rename(function (path) {
      var dirNameArray = path.dirname.split('/');
      path.dirname = dirNameArray.slice(1).join('/');
      path.extname = '.html';
      return path;
    }))
}

var htmlTaskServe = function () {
  var stream = htmlTaskBase();
  return stream
    .pipe(gulp.dest(paths.serveDest))
    .pipe(browserSync.stream())
}

var htmlTaskBuild = function () {
  var stream = htmlTaskBase();
  return stream
    .pipe(gulp.dest(paths.buildDest))
    .pipe(browserSync.stream())
}

gulp.task('html:serve', htmlTaskServe)
gulp.task('html:build', htmlTaskBuild)
module.exports = {
  'html:serve':htmlTaskServe,
  'html:build':htmlTaskBuild
}
