(function(){
	angular
	.module('app')
	.controller('searchCtrl', searchCtrl);

	/** @ngInject */
	function searchCtrl(routingService){
		var vm = this;

		vm.viewProduct = routingService.goToProduct;
		vm.goToCategory = routingService.goToCategory;
		vm.goToSubcategory = routingService.goToSubcategory;
		// vm.addToCart = userService.addToCart;
	}
})();