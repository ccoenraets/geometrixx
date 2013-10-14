define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        findAll = function () {
            var deferred = $.Deferred();
            deferred.resolve(items);
            return deferred.promise();
        },

        items = [
            {   "id": 1,
                "name": "Luckyseven",
                "message": "@shawjohnt Plan: Buy pair of Nairobi running shoes - I think that will motivate me if nothing else will",
                "pic": "Avatar_3.jpg"
            },
            {   "id": 2,
                "name": "Jiggs Casey",
                "message": "Mombassa Runners + Running Shoes = 5 star combo",
                "pic": "Avatar_2.jpg"
            },
            {   "id": 3,
                "name": "Lady Delight",
                "message": "Congrats to @melinda for winning this week'sWonder Workout",
                "pic": "Avatar_1.jpg"
            },
            {   "id": 4,
                "name": "everewilliams",
                "message": "What do you wear on a fun filled weekend of hiking and four wheeling? #help",
                "pic": "Avatar_4.jpg"
            },
            {   "id": 5,
                "name": "MikeAherne",
                "message": "Having my running analyzed so I can get the right shoes",
                "pic": "Avatar_5.jpg"
            },
            {   "id": 6,
                "name": "givmeEINSTEIN",
                "message": "Im sports wear by myself today",
                "pic": "Avatar_6.jpg"
            }
        ],

        FeedItem = Backbone.Model.extend({

        }),

        FeedItemCollection = Backbone.Collection.extend({

            model: FeedItem,

            sync: function (method, model, options) {
                if (method === "read") {
                    findAll().done(function (data) {
                        options.success(data);
                    });
                }
            }

        });

    return {
        FeedItem: FeedItem,
        FeedItemCollection: FeedItemCollection
    };

});