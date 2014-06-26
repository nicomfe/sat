'use strict';

SatApp.controller('MainCtrl', function ($scope, $rootScope, $modal) {

	$scope.userName = $rootScope.getUserNameLoggedIn();
	
	$scope.logout = function(){
		$rootScope.logout();
	};

	$scope.login = function(){
		var modalInstance = $modal.open({
	      templateUrl: '../../views/modals/loginModal.html',
	      controller: "LoginCtrl",
	      size: "sm"
	    });
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
