(function(){
	angular
	.module('app')
	.controller('navigationCtrl', navigationCtrl);

	/** @ngInject */
	function navigationCtrl(navigationService, routingService, httpService) {
		var vm = this;
		httpService.getCategories().then(function(categories){
			vm.categories = categories;
		});
		vm.openMenu = navigationService.openMenu;
		vm.goToCategory = routingService.goToCategory;
		vm.goToSubcategory = routingService.goToSubcategory;
	}
})();