const gulp = require('gulp');

gulp.task("hello", function(){
	console.log('nihao');
});




var sass = require('gulp-scss');

 // gulp.task('scss',function(){
 // 	return gulp.src('css/**/*.scss')

 // })
gulp.task('xiaomi',function(){
	return gulp.src("html/xiaomi.html")
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload())

}) 
	

gulp.task('watch',function(){
	gulp.watch("html/xiaomi.html",["xiaomi"])
	gulp.watch("css/*.scss",["sass"])

})
var uglify = require('gulp-uglify');
// gulp.task('scripts', function(){
// 	return gulp.src(['javascripts/avalon.js', 'javascripts/index.js'])
// 	.pipe(concat('vendor.js'))
// 	.pipe(gulp.dest('dist/js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/js'));
// })
// 
gulp.task("build",["sass",'xiaomi'])

var minifyCSS = require('gulp-minify-css');
gulp.task('sass', function(){
	return gulp.src("css/*.scss")
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload())
})


const connect = require('gulp-connect');
gulp.task('server', function(){
	connect.server({
		root: 'dist',
		port:8899,
		livereload: true
	})
})
gulp.task("default",['server','watch']);

gulp.task('images',function(){
	return gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'));
});
