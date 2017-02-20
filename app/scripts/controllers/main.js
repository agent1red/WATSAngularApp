'use strict';

/**
 * @ngdoc function
 * @name watsangularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watsangularAppApp
 */
angular.module('watsangularAppApp')
  .controller('MainCtrl', function ($scope, citysearch) {
      $scope.citiesFound = citysearch.find();

      $scope.findCities = function () {
          $scope.citiesFound = citysearch.find({
              query: $scope.location
          });
          $scope.searchQuery = $scope.location;
      };
  });