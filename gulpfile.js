var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: 4001
  })
})

gulp.task('browserify', function() {
  return browserify('./app/app.js')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js/'))
})

gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['browserify'])
})

gulp.task('default', ['connect', 'watch'])
