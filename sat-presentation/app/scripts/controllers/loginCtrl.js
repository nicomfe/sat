'use strict';

SatApp.controller('LoginCtrl', function($scope, $location, $modalInstance, $rootScope, accountFactory, loginService) {
	$scope.activeNav = 'login';
	$scope.accountFactory = accountFactory;
	$scope.userName = '';
	
	$scope.login = function() {
		$scope.loginError = false;
		$scope.loginFailed = false;

		if ($scope.loginForm && $scope.loginForm.$invalid){
			return;
		}

		$scope.loginLoading = true;

		var req = loginService.login($scope.userName, $scope.password);
		if(req == true){
			var userName = $scope.userName;
			$rootScope.setUserNameLoggedIn(userName);
			$scope.accountFactory.userName = userName;
			$rootScope.login();
			$modalInstance.close();
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