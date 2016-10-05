(function(){
	angular
	.module('app')
	.controller('homeCtrl', homeCtrl);

	/** @ngInject */
	function homeCtrl(navigationService){
		var vm = this;

		vm.goToSubcategory = navigationService.goToSubcategory;
		vm.goToCategory = navigationService.goToSubcategory;
	}
})();