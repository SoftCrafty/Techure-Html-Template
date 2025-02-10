// Importing necessary modules from gulp
const { src, dest, series, watch,parallel} = require('gulp');

const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sass = require('gulp-sass')(require('sass'));

function style(){
    return src('./sass/*.*')
    .pipe(plumber())
    .pipe(sass())
    .on('error', notify.onError())
    .pipe(dest('./css/'))
    .pipe(dest('./css/'))
}
exports.style = style;

function taskWatch(){
    watch('/sass/*.*', style)
};

exports.taskWatch = taskWatch;

exports.default =series(parallel(style), taskWatch);