define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';
    
    var Contact = Backbone.Model.extend ({
        defaults: {
            photo: 'http://placehold.it/100x100'
        }
    });
    
    return Contact;
    
});