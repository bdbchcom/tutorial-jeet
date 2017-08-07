var gulp = require('gulp')
var sass = require('gulp-sass')
var webserver = require('gulp-webserver')
var del = require('del')

gulp.task('default', ['webserver', 'scss'], function () {
  gulp.watch('./public/styles/**/*.scss', ['scss'])
})

gulp.task('scss', ['clean'], function () {
  return gulp.src('./public/styles/app.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      sourceMap: true
    }))
    .pipe(gulp.dest('./public/styles'))
})

gulp.task('webserver', function () {
  return gulp.src('./public')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 3000
    }))
})

gulp.task('clean', function () {
  return del('./public/styles/app.css')
})
