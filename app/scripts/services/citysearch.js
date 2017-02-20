'use strict';

/**
 * @ngdoc service
 * @name watsangularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the watsangularAppApp.
 */
angular.module('watsangularAppApp')
 .factory('citysearch', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=6c8912d0f4d911c85542740297789701', {}, {
         find: {
             method: 'GET',
             params: {
                 query: 'seattle'
             },
             isArray: false
         }
     });
 });
