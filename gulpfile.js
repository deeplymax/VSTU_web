const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack');
const path = require('path');

sass.compiler = require('node-sass');

gulp.task('build-css', () => {
    return gulp.src('./client/src/style.scss', { sourcemaps:true })
    .pipe(sass())
    .pipe(gulp.dest('./client/dest',{ sourcemaps:true }))
});

gulp.task('build-js', (done) => {
    webpack({
        entry: path.resolve(__dirname,'client/src/index.js'),
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'client/dest'),
        },
        devtool: 'inline-source-map',
    }, (err, stats) => {
        if (err || stats.hasErrors()) {
            console.error(stats);
            return;
        }
        done();
    })
})

gulp.task('default', gulp.series('build-css', 'build-js', () => {
    gulp.watch('./client/src/**/*.scss', gulp.series('build-css'));
    gulp.watch('./client/src/**/*.js', gulp.series('build-js'));
}))