'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    
    baseUrl: 'js',
    
    paths: {
        'jquery'    : '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone'  : '../bower_components/backbone/backbone',
        'text'      : '../bower_components/requirejs-text/text',
        'templates' : '../templates'
    }
});

require([
        'backbone',
        'views/app'
    ], function (Backbone, App) {
        
        Backbone.history.start();
        
        return new App();
        
    });