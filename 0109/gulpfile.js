'use strict'

const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
//const cssnano = require('gulp-cssnano')
const stylus = require('gulp-stylus')
const jade = require('gulp-jade')

gulp.task('html', () => {
    return gulp.src('./src/html/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist/'))
})

gulp.task('css', () => {
    return gulp.src('./src/styles/index.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: true
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['html', 'css'])
gulp.task('watch', () => {
    gulp.watch('./src/html/**/*.jade', ['html'])
    gulp.watch('./src/styles/**/*.styl', ['css'])
})
