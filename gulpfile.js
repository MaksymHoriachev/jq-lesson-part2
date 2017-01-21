
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    cache       = require('gulp-cache');


gulp.task('sass', function () {
    return gulp.src('web/sass/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/css'))
});

gulp.task('min', ['sass'], function () {
    return gulp.src('web/css/main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('web/css'))
});

gulp.task('watch', function () {
    gulp.watch('web/sass/**/*.+(sass|scss)', ['sass']);
    gulp.watch('web/css/main.css', ['min']);
});

gulp.task('fill', ['clean-prod', 'min'], function () {
    return gulp.src('web/**/*')
        .pipe(gulp.dest('production'))
});

gulp.task('clear', function () {
    return cache.clearAll();
});

gulp.task('default', ['watch']);

gulp.task('build', ['sass', 'min']);