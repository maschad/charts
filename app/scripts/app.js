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
  .module('chartsApp', ['ngRoute'])
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
