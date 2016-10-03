const gulp = require('gulp');
const path = require('path');
const ngAnnotate = require('gulp-ng-annotate');

const conf = require('../conf/gulp.conf');

gulp.task('scripts', scripts);

function scripts() {
  return gulp.src([conf.path.src('**/*.js'), path.join(`!${conf.paths.src}`, '/**/*.spec.js')])
    .pipe(ngAnnotate())
    .pipe(gulp.dest(conf.path.tmp()));
}
