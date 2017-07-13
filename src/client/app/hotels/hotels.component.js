(function () {
    'use strict';

    angular
        .module('hotels')
        .component('hotels',
            {
            bindings: {},
            controller: HotelsResultCtrl,
            templateUrl: "hotels/hotels.html"
            });

    HotelsResultCtrl.$inject = ['HotelsFactory'];

    function HotelsResultCtrl(HotelsFactory)
    {
        const self = this;

        self.filterOnHotels = [];
        self.loading = true;
        this.$onInit = function ()
        {

            HotelsFactory.getHotels().then(function (hotels)
            {
                self.hotels = hotels;
                self.filterOnHotels = hotels;
                self.loading = false;
            });
            this.filters =
                {
                "name" : "",
                "targetName" : "",
                "price":{
                    "priceMin" : 0,
                    "priceMax": 17352,
                },
                "stars":
                    {
                    "all": true,
                    "five": false,
                    "four": false,
                    "three" : false,
                    "two" : false,
                    "one" : false
                    },
            }
        };

        this.getHotels = function ()
        {
            return self.filterOnHotels;
        };
    }

})();
