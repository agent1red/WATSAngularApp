'use strict';

/**
 * @ngdoc function
 * @name watsangularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the watsangularAppApp
 */
angular.module('watsangularAppApp')
   .controller('CurrentCtrl', function ($scope, $routeParams, current) {
       $scope.cityID = $routeParams.cityID;

       $scope.currentWeather = current.query({
           cityID: $routeParams.cityID
       });
   });
