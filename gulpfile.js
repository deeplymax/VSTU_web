const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('build-css', () => {
    return gulp.src('./client/src/test_sass.scss')
    .pipe(sass())
    .pipe(gulp.dest('./client/dest'))
})

