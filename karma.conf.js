// Karma configuration
// Generated on Wed Mar 05 2014 09:38:26 GMT+0100 (W. Europe Standard Time)

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'components/jquery/jquery.min.js'  ,
            'components/angular/angular.js',
            'components/angular-cookies/angular-cookies.js',
            'components/angular-mocks/angular-mocks.js',
            'src/*.js',
            'src/*.js',
            'test/spec/**/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['PhantomJS'],

        captureTimeout: 60000,

        singleRun: false
    });
};