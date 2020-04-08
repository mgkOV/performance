const gulp = require("gulp");
const browserSync = require("browser-sync").create("server");

const css = require("./tasks/css");
const html = require("./tasks/html");
const javascript = require("./tasks/javascript");

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 5000
  });

  gulp.watch("./src/**/*.js", { ignoreInitial: false }, javascript);
}

module.exports = {
  build: gulp.series(javascript, html, css),
  watch
};
