'use strict';

angular
  .module('f1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/drivers/drivers.html',
        controller: 'drivers-controller',
        controllerAs: 'drivers-controller'
      })
      .when('/drivers', {
        templateUrl: 'scripts/drivers/drivers.html',
        controller: 'drivers-controller',
        controllerAs: 'drivers-controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
