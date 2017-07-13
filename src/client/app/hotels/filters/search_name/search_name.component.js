(function ()
{
    'use strict';

    angular
        .module('filter')
        .component('searchName',
            {
            bindings:
                {
                "filters" : '<'
                },
            templateUrl: 'hotels/filters/search_name/search_name.html'
            }).filter('filterHotel', function()
    {
        var self = this;
        return function (hotels,targetName)
        {
            return hotels.filter(function (hotel)
            {
                return hotel.name.toLowerCase().indexOf(targetName.toLowerCase()) != -1;
            })
        }
    })
})();
