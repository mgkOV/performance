const gulp = require("gulp");
const browserSync = require("browser-sync").create("server");

const css = require("./tasks/css");
const html = require("./tasks/html");
const svg = require("./tasks/svg");
const javascript = require("./tasks/javascript");

function watch() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 5000
  });

  gulp
    .watch("./src/**/*.js", { ignoreInitial: false }, javascript)
    .on("change", browserSync.reload);

  gulp.watch("./src/**/*.css", { ignoreInitial: false }, css).on("change", browserSync.reload);

  gulp.watch("./src/index.html", { ignoreInitial: false }, html).on("change", browserSync.reload);
}

module.exports = {
  build: gulp.series(javascript, html, css),
  watch
};
