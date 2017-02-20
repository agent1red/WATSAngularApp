'use strict';

/**
 * @ngdoc service
 * @name watsangularAppApp.forecast
 * @description
 * # forecast
 * Factory in the watsangularAppApp.
 */
angular.module('watsangularAppApp')
   .factory('forecast', function ($resource) {
       // Service logic
       // ...

       // Public API here
       return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=6c8912d0f4d911c85542740297789701', {}, {
           query: {
               method: 'GET',
               params: {
                   cityID: '4717560' // Paris, France ID
               },
               isArray: false
           }
       });
   });
