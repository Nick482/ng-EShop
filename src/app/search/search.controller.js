(function(){
	angular
	.module('app')
	.controller('searchCtrl', searchCtrl);

	/** @ngInject */
	function searchCtrl(routingService){
		var vm = this;

		vm.viewProduct = routingService.goToProduct;
		vm.goToCategory = function(id){
			console.log(id);
		}
	}
})();