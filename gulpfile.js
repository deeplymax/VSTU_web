const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('build-css', () => {
    return gulp.src('./client/src/style.scss', { sourcemaps:true })
    .pipe(sass())
    .pipe(gulp.dest('./client/dest',{ sourcemaps:true }))
});

gulp.task('build-js', (done) => {
    webpack({
        entry: './client/src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'client/dist'),
        },
    }, (err, stats) => {
        if(err) {
            console.error(err || 'Some error');
            return;
        }
        done();
    });  
});

gulp.task('default', gulp.series('build-css', () => {
    gulp.watch('./client/src/**/*.scss', 
    gulp.series('build-css'));
}));