const gulp = require("gulp");

gulp.task("package_json", () => {
  return gulp
    .src("./package.json")
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", gulp.series("package_json"), () => {
  console.log("✔ Gulp finished successfully");
});