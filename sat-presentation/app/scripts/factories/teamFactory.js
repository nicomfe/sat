'use strict';

SatApp.factory('teamFactory', function(userConsoleService){
	
	return {
		userTeams: null,

		getUserTeams: function(userId){
			var $this = this;
			$this.userTeams = userConsoleService.getUserTeams(userId);
		}
	};
});