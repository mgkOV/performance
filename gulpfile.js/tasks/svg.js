const gulp = require("gulp");
const svgmin = require("gulp-svgmin");

function svg() {
  return gulp
    .src("./src/img/*.svg")
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        },
        plugins: [
          {
            removeDoctype: false
          }
        ]
      })
    )
    .pipe(gulp.dest(`./img`));
}

module.exports = gulp.series(svg);
