'use strict';

SatApp.controller('MyTeamsCtrl', function ($scope, $rootScope, $location, teamFactory, userFactory) {

	$scope.teamFactory = teamFactory;
	
	
	$scope.getUserTeams = function(){
		teamFactory.getUserTeams(1);
		$location.path('/my_teams');
	};
	$scope.getUserDetails = function(){
		userFactory.getUserDetails(1);
		$location.path('/my_details');
	};

	$scope.getUserTeams();
});
