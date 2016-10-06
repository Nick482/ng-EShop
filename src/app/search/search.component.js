(function(){
	angular
	.module('app')
	.component('search', {
		templateUrl: 'app/search/search.html',
		bindings: {results: '<'},
		controller: 'searchCtrl',
		controllerAs: 'vm'
	})
})();