(function(){
	angular
	.module('app')
	.factory('httpService', httpService);
	/** @ngInject */
	function httpService($q, $http) {
		
		return {
			getCategories: getCategories,
			getSubcategories: getSubcategories
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

		function getSubcategories(id) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/categories/' + id
			}).then(function(category){
				deferred.resolve(category.data.subcategories);
			}).catch(function(err){
				console.log(err);
				// TODO Call error service
			});

			return deferred.promise;
		}
	}
})();