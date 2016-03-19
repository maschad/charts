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

    $scope.addSeries = function () {
      var rnd = []
      for (var i = 0; i < 10; i++) {
        rnd.push(Math.floor(Math.random() * 20) + 1)
      }
      $scope.chartConfig.series.push({
        data: rnd
      })
    },

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'scatter'
        }
      },
      series: [{
        type: 'line',
        data: [[0, 1.11], [5, 4.51]]
      },{
        type: 'scatter',
        name: 'Observations',
        data: [1, 2.0, 2.8, 3.5, 3.9, 4.2],
        marker: {
          radius: 4
        }
      }],
      title: {
        text: 'Regression Line'
      },
      xAxis:{
        currentMin: 0,
        currentMax: 10,
        minRange: 1
      },
      yAxis:{
        min: 0
      }
    }
  });
