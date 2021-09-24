/*Reference : https://www.pixemweb.com/blog/gulp-4-0-0-with-nodejs-imagemin-browsersync-sass-sourcemaps-cleancss-more/ */

const themename = 'hackathon';

// You can declare multiple variables with one statement by starting with var and seperate the variables with a comma and span multiple lines.
// Below are all the Gulp Plugins we're using.
const gulp          = require('gulp'),
      autoprefixer  = require('gulp-autoprefixer'),
      browserSync   = require('browser-sync').create(),
      reload        = browserSync.reload,
      sass          = require('gulp-sass'),
      concat        = require('gulp-concat'),
      imagemin      = require( 'gulp-imagemin' ),
      changed       = require( 'gulp-changed' ),
      lineec        = require( 'gulp-line-ending-corrector' ),
      sourcemaps    = require('gulp-sourcemaps'),
      jshint        = require( 'gulp-jshint' ),
      uglify        = require('gulp-uglify-es').default;

const root          = '../' + themename + '/',
      scss          = root + 'assets_src/scss/',
      js            = root + 'assets_src/js/',
      jsDist        = root + 'assets/js/';

const phpWatchFiles   = root + '**/*.php',
      styleWatchFiles = scss + '**/*.scss';

const jsSrc = [
  js + "script.js",
  js + "tabs.js",
  js + "accordion.js",
  js + "autocomplete.js",
  js + "slider.js",
  js + "dropdown.js",
  js + "modals.js",
  js + "video.js",
];


var imgSRC = root + 'assets_src/images/**/*',
    imgDEST = root + 'assets/images/';

var fontsSRC = root + 'assets_src/fonts/**/*',
    fontsDEST = root + 'assets/fonts';

function imgmin() {
  return gulp.src(imgSRC)
  .pipe(changed(imgDEST))
      .pipe( imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
      ]))
      .pipe( gulp.dest(imgDEST));
}

function css() {
  return gulp.src(scss + 'main.scss', { sourcemaps: true })
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(lineec())
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }));
}

function criticalCss() {
  return gulp.src(scss + 'critical.scss', { sourcemaps: true })
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(lineec())
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }));
}

function printCss() {
  return gulp.src(scss + 'print.scss', { sourcemaps: true })
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(lineec())
    .pipe(gulp.dest('assets/css', { sourcemaps: '.' }));
}

function fonts() {
  return gulp.src(fontsSRC)
    .pipe(gulp.dest(fontsDEST));
}

function javascript() {
  return gulp.src(jsSrc)
    .pipe(concat('app.min.js'))    
    .pipe(sourcemaps.init())
    .pipe(jshint())    
    // .pipe( jshint.reporter( "jshint-stylish" ) )
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDist));
}

function watch() {
    browserSync.init({
      open: 'external',
      proxy: 'http://localhost/projets/module/srcs/hackathon',
    });
    gulp.watch(styleWatchFiles, css);
    gulp.watch(styleWatchFiles, criticalCss);
    gulp.watch(styleWatchFiles, printCss);
    gulp.watch(imgSRC, imgmin);
    gulp.watch(jsSrc, javascript);
    gulp.watch([phpWatchFiles, jsDist + 'app.min.js', root + '/assets/css/main.css']).on('change', reload);
}

exports.css = css;
exports.criticalCss = criticalCss;
exports.printCss = printCss;
exports.javascript = javascript;
exports.watch = watch;
exports.imgmin = imgmin;
exports.fonts = fonts;

const build = gulp.series(css, criticalCss, printCss, javascript, imgmin,fonts);
gulp.task('build', build);