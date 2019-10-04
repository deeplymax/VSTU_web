const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')

const webpackConfig = require('./webpack.config');

sass.compiler = require('node-sass');

gulp.task('build-css', () => {
    return gulp.src('./client/src/style.scss', { sourcemaps:true })
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./client/dest', { sourcemaps:true }))
});

gulp.task('build-js', (done) => {
    webpack(webpackConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.error(err || stats.toJson("errors-only"));
        }
        done();
    })
})

gulp.task('default', gulp.series('build-css', 'build-js', () => {
    gulp.watch('./client/src/**/*.scss', gulp.series('build-css'));
    gulp.watch('./client/src/**/*.js', gulp.series('build-js'));
}))