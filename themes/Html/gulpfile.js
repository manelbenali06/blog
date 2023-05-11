var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('spruha/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('spruha/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
});

//_______ task for Plugins scss folder to Plugins css main style 
gulp.task('plugins', function(){
	console.log('Command executed successfully compiling SCSS in plugins.');
	return (gulp.src('spruha/assets/plugins/**/*.scss'), gulp.src('spruha/assets/plugins/**/**/*.scss'))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(beautify.css({ indent_size: 4 }))	
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('spruha/assets/plugins'));
});

gulp.task('default', gulp.series('watch','plugins'))




