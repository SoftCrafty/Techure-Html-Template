
const { src, dest, series, watch, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// Compile SCSS + sourcemap + browser reload
function style() {
    return src('./sass/**/*.scss') // ✅ Watches all SCSS in any subfolder
        .pipe(plumber({ errorHandler: notify.onError("SASS Error: <%= error.message %>") }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./css'))
         .pipe(browserSync.stream()); // ✅ Inject CSS without full page reload
}

// Watch SCSS + HTML
function taskWatch() {
    browserSync.init({
        server: {
            baseDir: './' // ✅ serves index.html from root
        }
    });

    watch('./sass/**/*.scss', style); // ✅ auto-recompile on any .scss change
    watch('./*.html').on('change', browserSync.reload); // ✅ live reload on HTML
}

exports.style = style;
exports.taskWatch = taskWatch;
exports.default = series(style, taskWatch);
