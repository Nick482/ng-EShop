(function(){
	angular
	.module('app')
	.component('category', {
		templateUrl: 'app/category/category.html',
		bindings: {subcategories: '<'},
		controller: 'categoryCtrl',
		controllerAs: 'vm'
	});
})();