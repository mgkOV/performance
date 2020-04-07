const gulp = require("gulp");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const gulpif = require("gulp-if");
const del = require("del");
const hash = require("gulp-hash-filename");
const webpack = require("webpack");

const { destFolder } = require("../config");

const DEV = process.env.NODE_ENV === "development";
const PROD = process.env.NODE_ENV === "production";

function javascript(done) {
  webpack(require("../../webpack.config.js"), function (err, stats) {
    if (err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    done();
  });
}

module.exports = gulp.series(javascript);
