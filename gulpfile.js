var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var fancy_log = require('fancy-log');
var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

var browserify = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);

function bundle() {
    return watchedBrowserify
        .bundle()
        .on('error', () => {
            fancy_log();
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}

function bundle_test() {
    return browserify
        .bundle()
        .on('error', (...args) => {
            fancy_log(args);
            process.exitCode = 1;
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('copy-html', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.series(gulp.parallel('copy-html'), bundle_test));
gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);