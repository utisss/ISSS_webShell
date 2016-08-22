var gulp = require('gulp');
var fs = require('fs');
var path = require('path');

var clean = require('gulp-clean');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

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
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
    return gulp.src('src/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/'));
});
 
gulp.task('html', function (cb) {
    fs.readdir(path.join(__dirname, 'src/data/'), function (err, files) {
        var templateData = {};
        for (var i = 0; i < files.length; i++) {
            var baseName = files[i].split('.')[0];
            templateData[baseName] = require('./src/data/' + files[i]);
        }
        
        var options = {
            ignorePartials: true,
            batch: ['./src/partials'],
	    helpers: {
		command: function (str) {
		    return new handlebars.Handlebars.SafeString(
			'<a href="javascript:void(0)" onclick="main.autoType(\'' + str + '\')" title="' + str + '">' + str + '</a>');
		}
	    }
        };
        
        gulp.src('src/index.hbs')
            .pipe(handlebars(templateData, options))
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest('dist'));
        
        cb();
    });
});

gulp.task('default', ['static', 'scripts', 'styles', 'html']);
