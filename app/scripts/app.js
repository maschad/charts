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
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pie', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/radar',{
        templateUrl:'views/radar.html',
        controller:'RadarCtrl',
        controllerAs: 'radar'
      })
      .when('/scatter',{
        templateUrl:'views/scatter.html',
        controller:'ScatterCtrl',
        controllerAs: 'scatter'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
