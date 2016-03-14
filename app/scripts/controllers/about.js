'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  	$scope.data = [300, 500, 100];
  });
