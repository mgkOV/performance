const gulp = require("gulp");
const hb = require("gulp-hb");
const del = require("del");

const getAssetsName = require("../utils/getAssetsName");
const { destFolder } = require("../config");

const DEV = process.env.NODE_ENV === "development";
const PROD = process.env.NODE_ENV === "production";

function clean() {
  return del(`./src/index.html`);
}

function html() {
  return gulp
    .src("./src/**/*.html")
    .pipe(hb().partials("./src/partials/**/*.hbs").data(getAssetsName()))
    .pipe(gulp.dest(`./${destFolder}`));
}

module.exports = gulp.series(clean, html);
