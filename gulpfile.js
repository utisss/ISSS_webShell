var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('src/**.*')
    .pipe(gulp.dest('dist'));
});