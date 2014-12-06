define([
    'underscore',
    'backbone',
    'models/contact'
], function (_, Backbone, Contact) {
    'use strict';
    
    var Directory = Backbone.Collection.extend ({
        model: Contact
    });
    
    return Directory;
    
});


