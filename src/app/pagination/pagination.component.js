(function(){
	angular
	.module('app')
	.component('pagination', {
		templateUrl: 'app/pagination/pagination.html',
		controller: 'paginationCtrl',
		controllerAs: 'vm'
	});
})();