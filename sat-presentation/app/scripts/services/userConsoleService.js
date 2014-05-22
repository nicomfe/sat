'use strict';

SatApp.service('userConsoleService', function(){

	
	var getUserTeams = function(userId){
		// TODO call rest service
		return [{teamId: 1, teamName: 'Catimba'}, {teamId: 2, teamName: 'River'}, {teamId: 3, teamName: 'Sacachispas'}];
	};

	var getUserDetails = function(userId){
		// TODO call rest service
		return {userId: 1, name: 'Fernando', surname: 'Cavenaghi', nickname: 'Cavegol'};
	};

	return{
		getUserTeams: getUserTeams,
		getUserDetails: getUserDetails
	};
});