var config = require('./getConfig')()
var nodePath = require('path')
var gulp = require('gulp')
var less = require('gulp-less')
var lessFileGlob = ['../**/**.less', '!./node_modules/**/*', '!./bower_components/**/*']
var lessDestPath = '../'
var LessPluginFunctions = require('less-plugin-functions')
var NpmImportPlugin = require("less-plugin-npm-import")
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
var livereload = require('livereload');
var server = livereload.createServer({
    port: config.liveReloadPort
});
gulp.task('less', function () {
    gulp.src(lessFileGlob)
        .pipe(less({
            plugins: [
                 new LessPluginFunctions(),
                 new NpmImportPlugin({
                     prefix: '~'
                 }),
                 new LessPluginAutoPrefix({browsers: ["not ie <= 8"]})
            ]
        }))
        .pipe(gulp.dest(lessDestPath))
});

gulp.task('auto', function () {
    server.watch(nodePath.join(__dirname, '../../'));
    gulp.watch(lessFileGlob, ['less'])
})

gulp.task('build', ['less'])
gulp.task('default', ['build', 'auto'])
