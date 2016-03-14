'use strict';

/**
 * @ngdoc function
 * @name chartsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chartsApp
 */
angular.module('chartsApp')
  .controller('MainCtrl', function ($scope) {
   $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
   $scope.series = ['Series A', 'Series B'];
   $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
   ];
   $scope.onClick = function (points, evt) {
     console.log(points, evt);
   };
});