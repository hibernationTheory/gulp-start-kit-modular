var config = require('../config')
var gulp   = require('gulp')
var path   = require('path')
//var watch  = require('gulp-watch') // should I be using gulp-watch?

var watchTask = function() {
  var watchableTasks = ['css']

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      gulp.watch(glob, function() {
       require('./' + taskName)()
      })
    }
  })
}

gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
