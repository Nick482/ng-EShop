const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
// const angularTemplatecache = require('gulp-angular-templatecache');
const pug = require('gulp-pug');
const debug = require('gulp-debug');

const conf = require('../conf/gulp.conf');

gulp.task('partials', partials);

function partials() {
  return gulp.src([conf.path.src('**/*.pug'), `!${conf.path.src('**/admin.pug')}`, `!${conf.path.src('**/app.pug')}`], {base: './src'})
  	.pipe(pug())
    .pipe(htmlmin())
    .pipe(gulp.dest(conf.path.tmp()));
}