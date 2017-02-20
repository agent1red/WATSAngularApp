'use strict';

/**
 * @ngdoc service
 * @name watsangularAppApp.current
 * @description
 * # current
 * Factory in the watsangularAppApp.
 */
angular.module('watsangularAppApp')
  .factory('current', function ($resource) { 
    // Service logic
    // ...

    // Public API here
      return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=6c8912d0f4d911c85542740297789701', {}, {
        query: {
            method: 'GET',
            params: {
                cityID: '4717560' // Paris, France ID
            },
            isArray: false
        }
    });
  });
