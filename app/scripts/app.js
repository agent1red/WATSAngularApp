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
      .otherwise({
        redirectTo: '/'
      });
	  $locationProvider.html5Mode(true);
  });
