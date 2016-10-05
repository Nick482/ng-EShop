(function(){
	angular
	.module('app')
	.factory('routingService', routingService);

	/** @ngInject */
	function routingService($state, $stateParams){
		return {
			goToCategory: goToCategory,
			goToSubcategory: goToSubcategory
		}
		
		function goToCategory(dest) {
			$state.go('category', {categoryID: dest});
		}

		function goToSubcategory(dest) {
			$state.go('subcategory', {subcategoryID: dest});
		}
	}
})();