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
			var searchText = text.replace(/ /g, '_');
			$state.go('search', {text: searchText});
		}

		function goToProduct(id){
			$state.go('product', {productID: id});
		}
	}
})();