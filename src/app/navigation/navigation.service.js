(function(){
	angular
	.module('app')
	.factory('navigationService', navigationService);

	/** @ngInject */
	function navigationService($http, $q) {
		return {
			getCategories: getCategories
		}

		function getCategories(){
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
	}
})();