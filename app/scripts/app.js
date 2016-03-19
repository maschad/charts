'use strict';

/**
 * @ngdoc overview
 * @name chartsApp
 * @description
 * # chartsApp
 *
 * Main module of the application.
 */
angular
  .module('chartsApp', [
    'ngRoute',
    'chart.js',
    'highcharts-ng'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
