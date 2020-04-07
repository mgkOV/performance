const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const atImport = require("postcss-import");
const simpleVars = require("postcss-simple-vars");
const rename = require("gulp-rename");
const del = require("del");
const postcssNormalize = require("postcss-normalize");
const gulpif = require("gulp-if");
const hash = require("gulp-hash-filename");

// const { destFolder } = require("../config");

// const DEV = process.env.NODE_ENV === "development";
// const PROD = process.env.NODE_ENV === "production";

// const browserSync = require("browser-sync").get("server");

// function clean() {
//   return del(`./${destFolder}/styles/**`);
// }

function css() {
  const modules = [atImport(postcssNormalize().postcssImport()), cssnano()];

  return gulp.src("./src/css/*.css").pipe(postcss(modules)).pipe(gulp.dest(`./css`));
}

module.exports = gulp.series(css);
