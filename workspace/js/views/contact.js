define([
    'underscore',
    'backbone',
    'text!templates/contacts.tmpl'
], function (_, Backbone, contactsTemplate) {
    'use strict';
    
    var ContactView = Backbone.View.extend ({
        tagName: 'article',
        
        className: 'contact-container',
        
        template: contactsTemplate,
        
        render: function () {
            var tmpl = _.template(this.template);
            
            this.$el.html ( tmpl (this.model.toJSON()) );
            return this;
        }
        
    });
    
    return ContactView;
});