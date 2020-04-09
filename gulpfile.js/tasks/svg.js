// const gulp = require("gulp");
// const svgmin = require("gulp-svgmin");

// function svg() {
//   return gulp.src("./src/img/*.svg").pipe(svgmin()).pipe(gulp.dest(`./img`));
// }
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

function svg() {
  return gulp
    .src("./src/img/*.svg")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest(`./img`));
}

module.exports = gulp.series(svg);
