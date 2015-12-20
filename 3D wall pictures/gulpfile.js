var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	minifycss = require('gulp-minify-css');

gulp.task('default', function () {
    gulp.watch('*.{html,css}', function () {
        browserSync.reload();
    });
});