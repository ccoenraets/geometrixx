define(function (require) {

    "use strict";

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        tpl         = require('text!tpl/Menu.html'),
        context     = require('app/context'),
        products = context.products,
        filteredProducts = context.filteredProducts,

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            _.bindAll(this);
            this.render();
        },

        render: function () {
            this.$el.html(template());
            return this;
        },

        events: {
            "change .type": "filter"
        },

        filter: function () {

            console.log("-------------------");

            var types = [];

            if ($(".women")[0].checked) {
                types.push("W");
            } else {
                console.log("women not checked");
            }
            if ($(".men")[0].checked) {
                types.push("M");
            }
            if ($(".accessories")[0].checked) {
                types.push("A");
            }

            var filtered = products.filter(function(product) {
                var c = _.contains(types, product.get("type"));
                console.log(c);
                return c;
            });

            filteredProducts.reset(filtered);
        }

    });

});