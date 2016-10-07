(function(){
	angular
	.module('app')
	.component('search', {
		templateUrl: 'app/search/search.html',
		bindings: {data: '<'},
		controller: 'searchCtrl',
		controllerAs: 'vm'
	})
})();