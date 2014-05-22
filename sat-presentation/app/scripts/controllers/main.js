'use strict';

SatApp.controller('MainCtrl', function ($scope, $rootScope) {

	$scope.userName = $rootScope.getUserNameLoggedIn();
	
	$scope.logout = function(){
		$rootScope.logout();
	};

	$scope.loggedIn = function(){
		var res;
		if($rootScope.isLoggedIn()){
			res = true;
		}else{
			res = false;
		}
		return res;
	};

	$scope.isLogged = $scope.loggedIn();
});
