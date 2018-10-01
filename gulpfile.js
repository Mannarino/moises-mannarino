const gulp= require('gulp');
const sass= require('gulp-sass');
const autoprefixer= require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('pepe',()=>
	gulp.src('src/styles.scss')
	.pipe(sass())
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream())
	);

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('water',function(){
	gulp.watch('src/partials/*.scss',['pepe']);
	gulp.watch("./dist/*.html").on('change', browserSync.reload);
});

gulp.task('default',['water','browser-sync','pepe']);