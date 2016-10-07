(function(){
	angular
	.module('app')
	.controller('subcategoryCtrl', subcategoryCtrl);

	/** @ngInject */
	function subcategoryCtrl(routingService) {
		var vm = this;
		vm.viewProduct = routingService.goToProduct;
		vm.addToCart = routingService.addToCart;
		vm.goToCategory = routingService.goToCategory;
		vm.goToSubcategory = routingService.goToSubcategory;

		console.log(vm.data.pages);
	}
})();