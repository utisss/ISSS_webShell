var gulp = require('gulp');

var clean = require('gulp-clean');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('clean', function () {
    return gulp.src('dist/**/*.*', { read: false })
        .pipe(clean({ force: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('static', function () {
    return gulp.src('src/static/**/*.*')
        .pipe(gulp.dest('dist/static/'));
});

gulp.task('scripts', function () {
    return gulp.src('src/*.js')
        .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dist/'));
});
 
gulp.task('html', function () {
    var templateData = {
        news: require('./src/data/news.json')
    },
    options = {
        ignorePartials: true,
        batch: ['./src/partials']
    }
 
    return gulp.src('src/index.hbs')
        .pipe(handlebars(templateData, options))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['static', 'scripts', 'styles', 'html']);