const gulp = require("gulp");

const css = require("./tasks/css");
const html = require("./tasks/html");
const javascript = require("./tasks/javascript");

module.exports = {
  build: gulp.series(javascript, html)
};
