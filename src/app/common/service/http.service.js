(function(){
	angular
	.module('app')
	.factory('httpService', httpService);
	/** @ngInject */
	function httpService($q, $http) {
		
		return {
			getCategories: getCategories,
			getSubcategories: getSubcategories,
			querySearch: querySearch,
			getProduct: getProduct,
			getSearchResults: getSearchResults
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

		function querySearch(text) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/autocomplete/' + text
			}).then(function(res){
				deferred.resolve(res.data);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}

		function getProduct(id){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/products/' + id
			}).then(function(product){
				deferred.resolve(product.data);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}

		function getSearchResults(text, page, limit){
			var deferred = $q.defer();
			var searchText = text.replace(/ /g, '_');
			var url = '/products/search/' + searchText + '/' + page + '/' + limit;

			$http({
				method: 'GET',
				url: url
			}).then(function(results){
				deferred.resolve(results.data);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}
	}
})();