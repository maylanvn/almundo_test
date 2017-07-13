(function ()
{
    'use strict';

    angular
        .module('filter')
        .component('searchStars',
            {
            controller: FilterStarCtrl,
            require:
                {
                hotelsResult : '^almundoHotels'
                },
            bindings:
                {
                "filters" : '<'
                },
            templateUrl: "hotels/filters/search_stars/search_stars.html"
            }).filter('filterStar', function ()
    {
        return function (hotels, stars)
        {
            return hotels.filter(function (hotel)
            {
                Math.ceil(hotel.stars);
                if(stars.all)
                {
                    return hotel;
                }
                else if(stars.five && hotel.stars == 5)
                {
                    return hotel;
                }
                else if(stars.four && hotel.stars == 4)
                {
                    return hotel;
                }
                else if(stars.three && hotel.stars == 3)
                {
                    return hotel;
                }
                else if(stars.two && hotel.stars == 2)
                {
                    return hotel;
                }
                else if(stars.one && hotel.stars == 1)
                {
                    return hotel;
                }
            });
        }
    });

    function FilterStarCtrl ()
    {

        let self = this;

        this.allStars = function ()
        {
            this.hotelsResult.filterOnHotels = this.hotelsResult.hotels;
        };

        this.singleCheckbox = function ()
        {
            self.filters.stars.all = false;
        };

        this.allStarsCheckbox = function ()
        {
            self.filters.stars.five = false;
            self.filters.stars.four = false;
            self.filters.stars.three = false;
            self.filters.stars.two = false;
            self.filters.stars.one = false;
        }
    }
})();
