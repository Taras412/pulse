
const {src, dest, watch, parallel, series} = require ('gulp');      /* integred const in GULP */

const scss = require('gulp-sass')(require('sass'));         /* our const */
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');


function scripts () {                     /* convertation JS files in MIN-JS */
	return src('app/js/main.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream())
}

function styles () {                      /* convertation SCSS files in MIN-CSS */
  return src('app/scss/style.scss')
		.pipe(autoprefixer({overrideBrowserslist: ['last 10 version']}))
		.pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
		.pipe(browserSync.stream())
}

function watching () {                    /* automaticly update browser (BrowserSync) and autom. launch Styles() , Scripts()*/
	watch(['app/js/main.js'], scripts)
	watch(['app/scss/style.scss'], styles)
	watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {                  /* automaticly update browser */
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	})
}

function cleanDist() {                /* deleted all old files in folder DIST before launchig function Building*/
	return src('dist')
		.pipe(clean())
}

function building() {                 /*  add files: min.css, min.jsm , *.html in folder DIST*/
	return src([
		'app/css/style.min.css',
		'app/js/main.min.js',
		'app/**/*.html'
	], {base : 'app'})
		.pipe(dest('dist'))
}

exports.styles = styles;               /* exports our functions */
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, building);      /* series launching two functions: cleanDist, building */

exports.default = parallel(styles, scripts, browsersync, watching);        /* parallel launch our functions */