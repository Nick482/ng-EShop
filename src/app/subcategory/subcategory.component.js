(function(){
	angular
	.module('app')
	.component('subcategory', {
		templateUrl: 'app/subcategory/subcategory.html',
		bindings: {data: '<'},
		controller: 'subcategoryCtrl',
		controllerAs: 'vm'
	});
})();