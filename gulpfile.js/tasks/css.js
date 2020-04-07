const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const atImport = require("postcss-import");
const cleanCSS = require("gulp-clean-css");

function css() {
  // const modules = [atImport(), cssnano()];
  // const modules = [cssnano()];

  return gulp
    .src("./src/css/*.css")
    .pipe(cleanCSS({ level: 0 }))
    .pipe(gulp.dest(`./css`));
}

module.exports = gulp.series(css);
