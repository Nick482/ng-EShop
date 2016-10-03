const gulp = require('gulp');
const wiredep = require('wiredep').stream;
const angularFilesort = require('gulp-angular-filesort');
const gulpInject = require('gulp-inject');
const pug = require('gulp-pug');
const html2pug = require('gulp-html2pug'); // neccessitated by a bug within gulp-inject - inability to inject into the latest version of pug
const debug = require('gulp-debug');
const htmlmin = require('gulp-htmlmin');

const conf = require('../conf/gulp.conf');

gulp.task('inject', inject);

function inject() {
  const injectScripts = gulp.src([
    conf.path.tmp('app/**/*.js'),
    // `!${conf.path.tmp('admin/*')}`,
    `!${conf.path.tmp('**/*.spec.js')}`
  ])
  .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  const injectAdminScripts = gulp.src([
    conf.path.tmp('admin/**/*.js'),
    `!${conf.path.tmp('**/*.spec.js')}`
  ])
  .pipe(angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

  const injectOptions = {
    ignorePath: [conf.paths.src, conf.paths.tmp],
    addRootSlash: false
  };

  gulp.src(conf.path.src('admin/admin.pug'), {base: './src'})
    .pipe(pug())  
    .pipe(gulpInject(injectAdminScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(html2pug())
    .pipe(gulp.dest(conf.path.tmp()))

  return gulp.src(conf.path.src('app/app.pug'), {base: './src'})
    .pipe(pug())
    .pipe(gulpInject(injectScripts, injectOptions))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(html2pug())
    .pipe(gulp.dest(conf.path.tmp()))
}
