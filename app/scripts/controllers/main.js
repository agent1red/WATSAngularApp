'use strict';

/**
 * @ngdoc function
 * @name watsangularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watsangularAppApp
 */
angular.module('watsangularAppApp')
  .controller('MainCtrl', function ($scope, current){ 
      $scope.current = current.query();
    
      $scope.refreshCurrent = function () {
          $scope.current = current.query({
              location: $scope.location
          });
      };
  });
