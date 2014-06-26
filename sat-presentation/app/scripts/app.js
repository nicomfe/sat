'use strict';

var SatApp = angular
  .module('SatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ]);

SatApp.config(function ($routeProvider) {

  $routeProvider
  .when('/my_teams', {
    templateUrl: '/views/user/my_teams.html',
    controller: 'UserCtrl',
    secure: true
  })
  .when('/my_details', {
    templateUrl: '/views/user/my_details.html',
    controller: 'UserCtrl',
    secure: true
  })
  .when('/', {
    templateUrl: '/views/main.html',
    controller: 'MainCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

SatApp.run(function($rootScope, $cookieStore, $route, $window,$location, loginService) {
  $rootScope.login = function() {
    $cookieStore.put('isLoggedIn', true);
  };

  $rootScope.getUserNameLoggedIn = function(){
    var userNameCookie = $cookieStore.get('userName');
    return userNameCookie;
  };

  $rootScope.setUserNameLoggedIn = function(_userName){
    return $cookieStore.put('userName',_userName);
  };

  $rootScope.isLoggedIn = function() {
    return $cookieStore.get('isLoggedIn');
  };

  $rootScope.logout = function() {
    //  return loginService.logout().success(function() {
    $cookieStore.remove('isLoggedIn');
    $cookieStore.remove('userName');
    // var currentRoute = $route.routes[$location.path()];
    // if (currentRoute.secure) {
    //     // current page we are on is a secured page, since user logged out, navigate to the home page
    //     $window.location = '/';
    // }
    $window.location = '/';
    // });
  };



});

