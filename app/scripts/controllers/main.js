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

    $scope.add = function () {
      var seriesArray = $scope.chartConfig.series;
      seriesArray[0].data = seriesArray[0].data.concat([$scope.points]);
    };

    $scope.chartConfig = {
      chart: {
        type: 'scatter',
        zoomType: 'xy',
        animation: false
      },

      title: {
        text: 'Highcharts draggable regression'
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'x-axis'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
      },
      yAxis: {
        title: {
          text: 'y-axis'
        }
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} cm, {point.y} kg'
          }
        }
      },
      series: [
        {
          regression: true,
          regressionSettings: {
            type: 'linear',
            color: 'rgba(223, 83, 83, .9)'
          },
          draggableX: true,
          draggableY: true,
          data: [10,20,30]

        }]
    };
  });
