const gulp = require("gulp");
const del = require("del");
// const browserSync = require("browser-sync").create("server");

const css = require("./tasks/css");
// const html = require("./tasks/html");
const javascript = require("./tasks/javascript");

// function watch() {
//   browserSync.init({
//     server: {
//       baseDir: "./temp"
//     },
//     port: 5000
//   });

//   gulp.watch("./src/styles/**/*.css", { ignoreInitial: false }, css);

//   gulp
//     .watch(
//       ["./src/**/*.html", "./src/partials/**/*.hbs"],
//       { ignoreInitial: false },
//       html
//     )
//     .on("change", browserSync.reload);

//   gulp
//     .watch("./src/**/*.js", { ignoreInitial: false }, javascript)
//     .on("change", browserSync.reload);
// }

module.exports = {
  build: gulp.series(gulp.parallel(css, javascript))
  // watch
};
