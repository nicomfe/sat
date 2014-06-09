'use strict';

SatApp.controller('LoginCtrl', function($scope, $location, $rootScope, accountFactory, loginService) {
	$scope.activeNav = 'login';
	$scope.accountFactory = accountFactory;
	$scope.login = function() {
		$scope.loginError = false;
		$scope.loginFailed = false;

		if ($scope.loginForm && $scope.loginForm.$invalid){
			return;
		}

		$scope.loginLoading = true;

		var req = loginService.login($scope.userName, $scope.password);
		if(req == true){
			$rootScope.setUserNameLoggedIn($scope.userName);
			$scope.accountFactory.userName = $scope.userName;
			$rootScope.login();
			
			$location.path('/my_teams');
		}else{
			$scope.loginFailed = true;
		}
	    // req.success(function(res) {
	    //     if (res.authenticated) {
	    //         $rootScope.login();
	    //         $location.path('/');
	    //     } else {
	    //         $scope.loginFailed = true;
	    //     }
	    // });

	    // req.
	    // catch (function() {
	    //     $scope.loginError = true;
	    // });

	    // req.
	    // finally(function() {
	    //     $scope.loginLoading = false;
	    // });
	};
	
});