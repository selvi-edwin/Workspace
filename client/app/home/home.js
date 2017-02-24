'use strict';

angular.module('demoApp')
  .config(function($stateProvider) {
    $stateProvider
       .state('eventslist', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
