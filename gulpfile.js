var gulp = require('gulp'),
uglify = require('gulp-uglify');


//styles
gulp.task('styles', function() {
  console.log('this is the styles task')
});

//scripts
gulp.task('scripts', function() {
  console.log('this is some o them javascrups')
});


//images
gulp.task('images', function() {
  console.log('this is the images task running')
});

//default
gulp.task('default', function() {
  console.log('this is the default task running...')
});
