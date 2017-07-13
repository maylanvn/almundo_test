(function () {
    'use strict';

    angular
        .module('hotels')
        .factory('HotelsFactory', HotelsFactory);

    HotelsFactory.$inject = ['$http'];

    function HotelsFactory($http)
    {
        const factory =
            {
            hotels: null,

            getHotels: function ()
            {
                return $http.get('/api/hotels').then(function (response)
                {
                    let data = response.data;
                    factory.hotels = data;
                    return data;
                });
            }
            };

        return factory;
    }
})();
