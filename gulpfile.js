var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnext = require('cssnext'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect')//使用connect启动一个Web服务器

var plumber = require('gulp-plumber');

gulp.task('images', function () {
    return gulp.src('static/images/**/*')
        .pipe(gulp.dest('dist/images/'))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    var processors = [
        autoprefixer({
            browsers: ['last 3 version', 'Android >= 4.0'],
            cascade: false,
            remove: false
        }),
    ];
    return gulp.src("static/css/css.css")
        .pipe(plumber())
        .pipe(postcss(processors))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssmin({})).on('error', errHandler)
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

function errHandler(error) {
    console.log(error.toString());
    this.emit('end');
};


gulp.task('connect', function () {
    //在localhost:3333打开
    connect.server({
        host: 'localhost', //地址，可不写，不写的话，默认localhost
        port: 3333, //端口号，可不写，默认8080
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});

//监听
gulp.task('watch', function () {
    gulp.watch('css/css.css', ['css']) //监控css文件
});

//执行gulp dev开启监听
gulp.task('dev', ['connect', 'watch']);

//上线打包
gulp.task('build', ['css','images'], function () {
    console.log('打包结束!');
});

