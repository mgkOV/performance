const gulp = require("gulp");
const svgmin = require("gulp-svgmin");

function svg() {
  return gulp.src("./src/img/*.svg").pipe(svgmin()).pipe(gulp.dest(`./img`));
}

module.exports = gulp.series(svg);
