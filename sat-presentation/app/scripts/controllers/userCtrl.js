'use strict';

SatApp.controller('UserCtrl', function ($scope, $rootScope) {
	$scope.isLogged = $rootScope.isLoggedIn();
});