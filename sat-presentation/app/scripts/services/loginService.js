'use strict';

SatApp.service('loginService', function($http){

	var login = function(_userName, _password){
		return true;
	};

	var logout = function(){
		return true;
	};

	return{
		login: login,
		logout: logout
	};
});