(function(){
	angular
	.module('app')
	.component('subcategory', {
		templateUrl: 'app/subcategory/subcategory.html',
		bindings: {products: '<'},
		controller: 'subcategoryCtrl',
		controllerAs: 'vm'
	});
})();