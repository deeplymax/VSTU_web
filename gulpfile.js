const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('build-css', () => {
    return gulp.src('./client/src/test_sass.scss', { sourcemaps:true })
    .pipe(sass())
    .pipe(gulp.dest('./client/dest',{ sourcemaps:true }))
});

gulp.task('default', () => {
    gulp.watch('./client/src/test_sass.scss', 
    gulp.parallel('build-css'));
});