(function (){

    'use strict';

    angular.module('filter')
        .component('headerSearch',
            {
            bindings:{
                "filters":'<'
            },
                require:
                    {
                        HotelsResultCtrl : "^almundoHotels"
                    },
                controller: FilterHeaderCtrl,
                templateUrl:'hotels/filters/filter_header/filter_header.html'
            });

    function FilterHeaderCtrl() {
        var self = this;
        this.$onInit = function () {}
    }

})();