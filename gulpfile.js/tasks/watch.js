var config = require('../config')
var gulp   = require('gulp')
var path   = require('path')
//var watch  = require('gulp-watch') // should I be using gulp-watch?

var watchTask = function() {
  var watchableTasks = ['css' ,'js', 'html']

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var extensions = task.extensions.length > 1 ? '{' + task.extensions + '}' : task.extensions[0]
      var glob = path.join(config.root.src, task.src, '**/*.' + extensions )
      gulp.watch(glob, function() {
       require('./' + taskName)()
      })
    }
  })
}

gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask
