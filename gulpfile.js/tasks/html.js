const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, conservativeCollapse: true }))
    .pipe(gulp.dest(`./`));
}

module.exports = gulp.series(html);
