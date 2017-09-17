const gulp = require('gulp');
const path = require('path');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const webpack = require('gulp-webpack');
const webpackConfig = require('./webpack.config');

const ENV = process.env.NODE_ENV || 'development';

// ts build
gulp.task('webpack', () => {
    gulp.src('./src/**/*.ts')
        .pipe(webpack(webpackConfig))
        .pipe(gulpif(ENV === 'production', uglify()))
        .pipe(gulp.dest('./dist/js'))
})