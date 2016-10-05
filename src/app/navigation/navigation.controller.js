(function(){
	angular
	.module('app')
	.controller('navigationCtrl', navigationCtrl);

	/** @ngInject */
	function navigationCtrl(navigationService) {
		var vm = this;
		navigationService.getCategories().then(function(categories){
			vm.categories = categories;
		});
		vm.openMenu = navigationService.openMenu;
		vm.goToCategory = navigationService.goToCategory;
		vm.goToSubcategory = navigationService.goToSubcategory;
	}
})();