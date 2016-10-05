(function(){
	angular
	.module('app')
	.controller('navigationCtrl', navigationCtrl);

	/** @ngInject */
	function navigationCtrl(navigationService) {
		var vm = this;
		navigationService.getCategories().then(function(categories){
			console.log(categories);
			vm.categories = categories;
		});
	}
})();