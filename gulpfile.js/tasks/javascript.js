const gulp = require("gulp");
const uglify = require("gulp-terser");

function javascript() {
  return gulp
    .src("./src/js/*.js")
    // .pipe(
    //   uglify({
    //     keep_fnames: true,
    //     mangle: false
    //   })
    // )
    .pipe(gulp.dest(`./js`));
}

module.exports = gulp.series(javascript);
