const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const merge = require('merge-stream');

// Compile Sass & into css
function style() {
    const root = gulp.src('./src/*.scss').pipe(sass()).pipe(gulp.dest('./src')).pipe(browserSync.stream());
    const components = gulp.src('./src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('./src/components/')).pipe(browserSync.stream());
    const layouts = gulp.src('./src/layouts/**/*.scss').pipe(sass()).pipe(gulp.dest('./src/layouts/')).pipe(browserSync.stream());

    return merge(root, components, layouts);
}

function watch() {
    gulp.watch('./src/**/*.scss', style);
    gulp.watch('./src/*.scss', style);
}

exports.style = style;
exports.watch = watch;