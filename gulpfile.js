/**
 * author: leekai
 * created on 2017/2/23 0023
 */

//引入各个模块
var gulp = require("gulp"),
    scss = require("gulp-sass"),
    browserSync = require("browser-sync").create(),
    uglify = require("gulp-uglify"),
    reload = browserSync.reload;

//sass的输出格式有 nested, expanded, compact, compressed 默认为nested
gulp.task("scss", function(){
    return gulp.src("./scss/main.scss")
           .pipe(scss({outputStyle: "compressed"})).on("error", scss.logError)
           .pipe(gulp.dest("./css"))
           .pipe(reload({stream: true}));
});
//静态服务器
gulp.task("browser-sync", function(){
    browserSync.init({
       server: "./pages"
    });
    //监听scss文件和html文件的变化
    gulp.watch("./scss/*.scss", ["scss"]);
    gulp.watch("./pages/*.html").on("change", reload);
});
//压缩、重命名JS
gulp.task('minifyjs', function () {
    return gulp.src('scripts/*.js')      //需要操作的文件
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dest/js'));       //输出到文件夹
});
gulp.task("default", ["browser-sync"]);

