(function(){
	angular
	.module('app')
	.controller('paginationCtrl', paginationCtrl);

	/** @ngInject */
	function paginationCtrl(routingService, httpService){
		var vm = this;
		var pages = httpService.getPagesCount();
		
	}
})();