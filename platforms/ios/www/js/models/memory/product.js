define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),

        findById = function (id) {
            var deferred = $.Deferred(),
                product = null,
                l = products.length;
            for (var i = 0; i < l; i++) {
                if (products[i].id === id) {
                    product = products[i];
                    break;
                }
            }
            deferred.resolve(product);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = products.filter(function (element) {
                return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findAll = function () {
            var deferred = $.Deferred();
            deferred.resolve(products);
            return deferred.promise();
        },

        products = [
            {   "id": 1,
                "name": "Tuareg Summer",
                "type2": "M",
                "category": "Men's Shorts",
                "price": "$39.90",
                "rating": 4,
                "smallPic": "tuareg_small.jpg",
                "largePic": "tuareg.jpg",
                "features": [
                    "Lightweight, breathable cotton keeps you cool on hot summer days",
                    "Large pockets secure essentials like your keys and wallet",
                    "Comes in range of colors",
                    "Easywash, pre-shrunk and stain-resistant"
                ]
            },
            {   "id": 2,
                "name": "Nairobi Runners Blue",
                "type": "M",
                "category": "Men's Sport Footwear",
                "price": "$75",
                "rating": 3,
                "smallPic": "nairobi_small.jpg",
                "largePic": "nairobi.jpg",
                "features": [
                    "Lightweight upper with mesh windows for ventilation",
                    "Impacto cushioning system delivers 30% more protection when running on hard surfaces",
                    "Excellent ankle support",
                    "Available in a variety of colors"
                ]
            },
            {   "id": 3,
                "name": "Swim Goggles",
                "type": "A",
                "category": "Men's Sport Accessories",
                "price": "$25",
                "rating": 5,
                "smallPic": "goggles_small.jpg",
                "largePic": "goggles.jpg",
                "features": [
                    "Synthetic shell features waterproof, breathable coating; taped critical seams add weather protection",
                    "Polyester insulation hoards warmth on the inside",
                    "Integrated hood features removable faux fur trim for a dash of style",
                    "Stretch inner cuffs with thumbholes add warmth and an extra barrier against snow entry"
                ]
            },
            {   "id": 4,
                "name": "Interlaken Trek",
                "type": "M",
                "category": "Sport Hikers Footwear",
                "price": "$189.90",
                "rating": 4,
                "smallPic": "interlaken_small.jpg",
                "largePic": "interlaken.jpg",
                "features": [
                    "Lightweight upper with mesh windows for ventilation",
                    "Impacto cushioning system delivers 30% more protection when running on hard surfaces",
                    "Excellent ankle support",
                    "Available in a variety of colors"
                ]
            },
            {   "id": 5,
                "name": "Pufferfish",
                "type": "A",
                "category": "Snorkeling Fins",
                "price": "$25",
                "rating": 3,
                "smallPic": "pufferfish_small.jpg",
                "largePic": "pufferfish.jpg",
                "features": [
                    "Wool blend offers natural water repellence in light moisture",
                    "Polyfill insulation adds extra warmth",
                    "Lapels can be buttoned up to the neck for added warmth",
                    "Tailored details include a back dart, bound seams, finished interior and button cuffs"
                ]
            },
            {   "id": 6,
                "name": "Raja Ampat",
                "type": "W",
                "category": "Women's Sunglasses",
                "price": "$36",
                "rating": 5,
                "smallPic": "raja_small.jpg",
                "largePic": "raja.jpg",
                "features": [
                    "Wool blend offers natural water repellence in light moisture",
                    "Polyfill insulation adds extra warmth",
                    "Lapels can be buttoned up to the neck for added warmth",
                    "Tailored details include a back dart, bound seams, finished interior and button cuffs"
                ]
            },
            {   "id": 7,
                "name": "Mombassa Runners Pink",
                "type": "W",
                "category": "Women's Cross-Trainers",
                "price": "$120",
                "rating": 2,
                "smallPic": "mombassa_small.jpg",
                "largePic": "mombassa.jpg",
                "features": [
                    "Extra lateral support",
                    "Quick fasten velcro",
                    "Elasticized upper for maximum comfort"
                ]
            },
            {   "id": 8,
                "name": "Banff Snow",
                "type": "M",
                "category": "Ski Boots",
                "price": "$110",
                "rating": 4,
                "smallPic": "banff_small.jpg",
                "largePic": "banff.jpg",
                "features": [
                    "Extra lateral support",
                    "Quick fasten velcro",
                    "Elasticized upper for maximum comfort"
                ]
            },
            {   "id": 9,
                "name": "Corona",
                "type": "M",
                "category": "Shorts",
                "price": "$39",
                "rating": 4,
                "smallPic": "corona_small.jpg",
                "largePic": "corona.jpg",
                "features": [
                    "Lightweight peached nylon fabric wicks moisture and dries quickly to keep you comfortable on the go; fabric has a soft, smooth feel",
                    "With a UPF 50+ rating, fabric provides excellent protection against harmful ultraviolet rays",
                    "Secure your travel and trail essentials in the 2 side-seam zippered pockets or side cargo pockets"
                ]
            },
            {   "id": 10,
                "name": "Saskatoon Parka Purple",
                "type": "W",
                "category": "Women's Coat",
                "price": "$299",
                "rating": 4,
                "smallPic": "saskatoon_small.jpg",
                "largePic": "saskatoon.jpg",
                "features": [
                    "Storm shell provides wind and rain protection while allowing moisture to escape, keeping you warm and dry",
                    "High loft goose down provides the best lightweight insulation",
                    "Fur-lined hood for great protection in high wind conditions",
                    "Two high hand warmer pockets with fleece lining and two lower fleece lined pockets to keep your hands warm",
                    "Heavy duty rib knit cuffs and waistband to keep out cold winds and drafts",
                    "Inset sleeve design for comfort and improved fit"
                ]
            },
            {   "id": 11,
                "name": "Edmonton Winter",
                "type": "M",
                "category": "Men's Winter Coat",
                "price": "$160",
                "rating": 2,
                "smallPic": "edmonton_small.jpg",
                "largePic": "edmonton.jpg",
                "features": [
                    "Storm shell provides wind and rain protection while allowing moisture to escape, keeping you warm and dry",
                    "High loft goose down provides the best lightweight insulation",
                    "Fur-lined hood for great protection in high wind conditions",
                    "Two high hand warmer pockets with fleece lining and two lower fleece lined pockets to keep your hands warm",
                    "Heavy duty rib knit cuffs and waistband to keep out cold winds and drafts",
                    "Inset sleeve design for comfort and improved fit"
                ]
            },
            {   "id": 12,
                "name": "Fernie Snow",
                "type": "A",
                "category": "Men's Ski Goggles",
                "price": "$38",
                "rating": 5,
                "smallPic": "fernie_small.jpg",
                "largePic": "fernie.jpg",
                "features": [
                    "Storm shell provides wind and rain protection while allowing moisture to escape, keeping you warm and dry",
                    "High loft goose down provides the best lightweight insulation",
                    "Fur-lined hood for great protection in high wind conditions",
                    "Two high hand warmer pockets with fleece lining and two lower fleece lined pockets to keep your hands warm",
                    "Heavy duty rib knit cuffs and waistband to keep out cold winds and drafts",
                    "Inset sleeve design for comfort and improved fit"
                ]
            },
            {   "id": 13,
                "name": "Portland",
                "type": "M",
                "category": "Portland Hooded Jacket",
                "price": "$75",
                "rating": 5,
                "smallPic": "portland_small.jpg",
                "largePic": "portland.jpg",
                "features": [
                    "Polyurethane, Balsa Wood",
                    "Hand shaped",
                    "High gloss finish"
                ]
            },
            {   "id": 14,
                "name": "Bahamas",
                "type": "W",
                "category": "Shorts",
                "price": "$38",
                "rating": 5,
                "smallPic": "bahamas_small.jpg",
                "largePic": "bahamas.jpg",
                "features": [
                    "Polyurethane, Balsa Wood",
                    "Hand shaped",
                    "High gloss finish"
                ]
            },
            {   "id": 15,
                "name": "Montevideo",
                "type": "W",
                "category": "Sun Hat",
                "price": "$21",
                "rating": 4,
                "smallPic": "montevideo_small.jpg",
                "largePic": "montevideo.jpg",
                "features": [
                    "Polyurethane, Balsa Wood",
                    "Hand shaped",
                    "High gloss finish"
                ]
            },
            {   "id": 16,
                "name": "Soleil",
                "type": "W",
                "category": "Tunic",
                "price": "$69",
                "rating": 5,
                "smallPic": "soleil_small.jpg",
                "largePic": "soleil.jpg",
                "features": [
                    "Wool blend offers natural water repellence in light moisture",
                    "Polyfill insulation adds extra warmth",
                    "Lapels can be buttoned up to the neck for added warmth",
                    "Tailored details include a back dart, bound seams, finished interior and button cuffs"
                ]
            },
            {   "id": 17,
                "name": "Maui Marine",
                "type": "W",
                "category": "Women's Cotton Top",
                "price": "$29.90",
                "rating": 4,
                "smallPic": "maui_small.jpg",
                "largePic": "maui.jpg",
                "features": [
                    "Lightweight cotton twill",
                    "Made in Thailand",
                    "Guaranteed sweatshop-free"
                ]
            },
            {   "id": 18,
                "name": "Montreal Snow Red",
                "type": "A",
                "category": "Winter Hat",
                "price": "$29.90",
                "rating": 1,
                "smallPic": "montreal_small.jpg",
                "largePic": "montreal.jpg",
                "features": [
                    "Lightweight cotton twill",
                    "Made in Thailand",
                    "Guaranteed sweatshop-free"
                ]
            },
            {   "id": 19,
                "name": "Mont Tremblant",
                "type": "A",
                "category": "Nordic Ski Gloves",
                "price": "$67.90",
                "rating": 2,
                "smallPic": "tremblant_small.jpg",
                "largePic": "tremblant.jpg",
                "features": [
                    "Lightweight cotton twill",
                    "Made in Thailand",
                    "Guaranteed sweatshop-free"
                ]
            }
        ],

        Product = Backbone.Model.extend({

            sync: function (method, model, options) {
                if (method === "read") {
                    findById(parseInt(this.id)).done(function (data) {
                        options.success(data);
                    });
                }
            }

        }),

        ProductCollection = Backbone.Collection.extend({

            model: Product,

            sync: function (method, model, options) {
                if (method === "read") {
                    if (options.data) {
                        findByName(options.data.name).done(function (data) {
                            options.success(data);
                        });
                    } else {
                        findAll().done(function (data) {
                            options.success(data);
                        });
                    }
                }
            }

        });

    return {
        Product: Product,
        ProductCollection: ProductCollection
    };

});