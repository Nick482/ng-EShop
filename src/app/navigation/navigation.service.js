(function(){
	angular
	.module('app')
	.factory('navigationService', navigationService);

	/** @ngInject */
	function navigationService($http, $q, $state, $stateParams) {
		return {
			getCategories: getCategories,
			openMenu: openMenu,
			goToCategory: goToCategory,
			goToSubcategory: goToSubcategory
		}

		function getCategories() {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/categories/'
			}).then(function(categories){
				deferred.resolve(categories.data);
			}).catch(function(err){
				console.log(err);
				// TODO Call error service
			});

			return deferred.promise;
		}

		function openMenu($mdOpenMenu, ev) {
			$mdOpenMenu(ev);
		}

		function goToCategory(dest) {
			$state.go('category', {categoryID: dest});
		}

		function goToSubcategory(dest) {
			$state.go('subcategory', {subcategoryID: dest});
		}
	}
})();