var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("compile", function(){
    return gulp.src("src/**/**/*.js").pipe(babel()).pipe(gulp.dest("build"))
})

gulp.task("default", ["compile"]);
// gulp.watch("src/**", ["compile"]);