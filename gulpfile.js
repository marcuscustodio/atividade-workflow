'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

//Compila e minifica  os arquivos SCSS 
gulp.task('sass', function () {
  return gulp.src('source/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

//Escuta a Pasta Scss 
gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/*.scss', ['sass']);
});

//Minifica o html
gulp.task('minify-html', function(){
  return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
});