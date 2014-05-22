'use strict';

SatApp.service('loginService', function($rootScope){

	var login = function(_userName, _password){
		// TODO call rest service
		return true;
	};

	var logout = function(){
		$rootScope.logout();
	};

	return{
		login: login,
		logout: logout
	};
});