(function ()
{
    'use strict';

    angular
        .module('filter')
        .component('filter',
            {
            controller : FilterCtrl,
            bindings:
                {
                "filters" :'<',
                },
            templateUrl: 'hotels/filters/filter.html'
            });

    function FilterCtrl (){}
})();
