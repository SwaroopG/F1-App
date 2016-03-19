'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:drivers-controller
 * @description
 * # drivers-controller
 * Controller that retrieves F1 drivers information.
 */
angular.module('f1App')
  .controller('drivers-controller', function ($scope, $http) {
  $scope.driversList = [];

  var driverData = {};
  driverData.getDrivers = function() {
    return $http({
      method: 'JSONP',
      url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
    });
  }
  driverData.getDrivers().success(function (response) {
    $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
  });
});
