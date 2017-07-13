(function ()
{

    'use strict';

    angular
        .module('hotels')
        .component('hotelList',
            {
            controller: HotelListCtrl,
            bindings:
                {
                hotels: '<',
                filters: '<'
                },
            templateUrl: "hotels/hotel-list/hotel-list.html"
            });

        function HotelListCtrl ()
        {

        }
})();
