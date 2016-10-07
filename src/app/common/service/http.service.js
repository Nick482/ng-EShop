(function(){
	angular
	.module('app')
	.factory('httpService', httpService);
	/** @ngInject */
	function httpService($q, $http) {
		var pages;
		
		return {
			getCategories: getCategories,
			getSubcategories: getSubcategories,
			getSubcategory: getSubcategory,
			querySearch: querySearch,
			getProduct: getProduct,
			getSearchResults: getSearchResults,
			getPagesCount: getPagesCount
		}

		function get(url) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: url
			}).then(function(res){
				if(res.data.pages){
					pages = res.data.pages;
				}
				deferred.resolve(res.data);
			}).catch(function(err){
				console.log(err);
				// TODO Call error service
			});

			return deferred.promise;
		}

		function getCategories() {
			var url = '/categories/';

			return get(url);
		}

		function getSubcategories(id) {
			var url = '/categories/' + id

			return get(url);
		}

		function getSubcategory(id, page, limit) {
			var url = '/subcategories/' + id + '/' + page + '/' + limit;

			return get(url);
		}

		function querySearch(text) {
			var url = '/autocomplete/' + text;
			
			return get(url);
		}

		function getProduct(id){
			var url = '/products/' + id;

			return get(url);
		}

		function getSearchResults(text, page, limit){
			var url = '/products/search/' + text + '/' + page + '/' + limit;

			return get(url);
		}
		
		function getPagesCount() {
			return pages;
		}
	}
})();