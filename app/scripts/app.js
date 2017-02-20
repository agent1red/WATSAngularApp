'use strict';

/**
 * @ngdoc overview
 * @name watsangularAppApp
 * @description
 * # watsangularAppApp
 *
 * Main module of the application.
 */
angular
  .module('watsangularAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,  $locationProvider) {
      $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current/:cityID', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
     .when('/forecast/:cityID', {
    templateUrl: 'views/forecast.html',
    controller: 'ForecastCtrl',
    controllerAs: 'forecast'
})
      .otherwise({
        redirectTo: '/'
      });
  });
