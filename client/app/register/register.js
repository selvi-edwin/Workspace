'use strict';

angular.module('demoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterCtrl'
      })
      .state('reglist', {
        url: '/reglist',
        templateUrl: 'app/reglist/reglist.html',
        controller: 'ReglistCtrl'
      });
  });
