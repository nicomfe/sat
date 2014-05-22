'use strict';

SatApp.factory('userFactory', function(userConsoleService){
	
	return {
		user: null,

		getUserDetails: function(userId){
			var $this = this;
			$this.user = userConsoleService.getUserDetails(userId);
		}
	};
});