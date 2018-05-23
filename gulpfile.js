var gulp = require('gulp');
var stylus = require('gulp-stylus');
var handlebars = require('handlebars');
var gulpHandlebars = require('gulp-handlebars-html')(handlebars);
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var Scrolltrigger = require('scrolltrigger');


gulp.task('styles', function(){
	return gulp.src('src/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('http/css'))
});

gulp.task('html', function () { 
	var templateData = {
        main: [
        	{title:"healthy",img:"lol",copy:"Building the foundation for the new non-profit health provider to go from 0 members to 50,000."},
        	{title:"educational",img:"kc",copy:"Making a Webby Honoree out of the midwest’s top culinary institute."},
        	{title:"financial",img:"fib",copy:"Transforming the interactive home of the first bank to open exclusively on the internet."},
        	{title:"environmental",img:"cnec",copy:"Empowering Chicago’s low-income residents to reduce energy bills by 20%."},
        	{title:"delicious",img:"mp",copy:"Reenergizing the leading fondue restaurant’s mobile strategy to reduce bounce rate by 79%."},
        	{title:"charitable",img:"soc",copy:"Serving the 5,000 athletes in the Chicago-born Special Olympics."},
        	{title:"inventive",img:"lg",copy:"Building web and and mobile applications for the inventor, entrepreneur, and “warm-blooded shark” on ABC’s Shark Tank."},
        	{title:"holistic",img:"rf",copy:"Strategizing and designing the digital brand for Chicago’s hottest venture-backed weight loss startup."},
        	{title:"luxurious",img:"denali",copy:"Vivamus ac ultrices augue. Pellentesque convallis velit nulla, vitae efficitur massa."},
        ],
        gallery: [
	        {img:"ecotally",alt:"Eco / Tally"},
	        {img:"blueplate",alt:"Blue Plate"},
	        {img:"authentify",alt:"Authentify"},
	        {img:"carzell",alt:"Carzell"},
	        {img:"edelson",alt:"Edelson"},
	        {img:"aligned",alt:"Aligned Moden Health"},
	        {img:"varsityvocals",alt:"Varsity Vocals"},
	        {img:"fourcorners",alt:"Four Corners Tavern Group"},
	        {img:"logo3",alt:"Unknown"},
	        {img:"physicians",alt:"Physicians Immediate Care"},
	        {img:"INCS",alt:"Illinois Network of Charter Schools"},
	        {img:"deltadental",alt:"Delta Dental"},
        ]
    },
	options = {
		partialsDirectory : ['src/partials']
	}

	return gulp.src('src/index.handlebars')
		.pipe(gulpHandlebars(templateData, options))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('http'));
});

gulp.task('server', function(){
	connect.server({
		root: [
			'http',
		],
		port: process.env.PORT || 8080
	})
});

gulp.task('watch', function(){	
	gulp.watch('src/**/*.styl', ['styles']);
	gulp.watch('src/**/*.handlebars', ['html']); 
});


gulp.task('default', ['styles', 'html', 'server', 'watch'])