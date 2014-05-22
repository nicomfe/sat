'use strict';

var SatApp = angular
  .module('SatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ]);

SatApp.config(function ($routeProvider) {

  $routeProvider
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })
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
    return $cookieStore.get('userName');
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

  $rootScope.$on('$routeChangeStart', function(angularEvent, next, current) {

    if (!$cookieStore.get('isLoggedIn') && next.secure) {
      // they are not currently logged in and the page they're trying to get to is a secured page
      // -> redirect them to the login page, keep track of where they were trying to get to
      $location.path('/login');
      $cookieStore.put('postLoginState', {
        page: next.originalPath
      });
    } else if (next.originalPath === '/login' && !$cookieStore.get('postLoginState') && current) {
      // trying to navigate to the login page, and there is no postLoginState already stored
      // -> keep track of the current page to navigate back to after a successful login
      $cookieStore.put('postLoginState', {
        page: current.originalPath
      });
    } else if ($cookieStore.get('postLoginState') && next.originalPath !== '/login') {
      // trying to navigate somewhere that is not the login page and the postLoginState already exists
      // -> delete the postLoginState as it is no longer valid
      var postLoginState = $cookieStore.get('postLoginState');
      if (next.originalPath !== postLoginState.page) {
        $cookieStore.remove('postLoginState');
      }
    }

    $rootScope.error = null;
  });
});

