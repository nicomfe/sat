'use strict';

SatApp.controller('UserCtrl', function ($scope, $rootScope, $location, teamFactory, userFactory) {
	$scope.isLogged = $rootScope.isLoggedIn();

	$scope.userFactory = userFactory;
	$scope.teamFactory = teamFactory;
	
	
	$scope.getUserTeams = function(){
		teamFactory.getUserTeams(1);
		$location.path('/my_teams');
	};
	$scope.getUserDetails = function(){
		userFactory.getUserDetails(1);
		$location.path('/my_details');
	};

	if($scope.teamFactory.userTeams == null){
		// open my teams by default
		$scope.getUserTeams();
	}
});