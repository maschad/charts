'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:RadarCtrl
 * @description
 * # RadarCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('RadarCtrl', function ($scope) {
    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
  	$scope.data = [
	    [65, 59, 90, 81, 56, 55, 40],
	    [28, 48, 40, 19, 96, 27, 100]
  	];
 });
