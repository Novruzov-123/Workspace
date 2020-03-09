const gulp = require ('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./sass/**/*.sass", serveSass);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
    };

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return gulp.src("./sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;