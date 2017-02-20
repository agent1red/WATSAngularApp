'use strict';

/**
 * @ngdoc function
 * @name watsangularAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the watsangularAppApp
 */
angular.module('watsangularAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
      $scope.cityID = $routeParams.cityID;

      $scope.forecastData = forecast.query({
          cityID: $routeParams.cityID
      });
  });
