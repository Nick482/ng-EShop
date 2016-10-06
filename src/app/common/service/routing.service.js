(function(){
	angular
	.module('app')
	.factory('routingService', routingService);

	/** @ngInject */
	function routingService($state, $stateParams){
		return {
			goToCategory: goToCategory,
			goToSubcategory: goToSubcategory,
			goToSearch: goToSearch,
			goToProduct: goToProduct
		}
		
		function goToCategory(dest) {
			$state.go('category', {categoryID: dest});
		}

		function goToSubcategory(dest) {
			$state.go('subcategory', {subcategoryID: dest});
		}

		function goToSearch(text) {
			$state.go('search', {text: text});
		}

		function goToProduct(id){
			$state.go('product', {productID: id});
		}
	}
})();