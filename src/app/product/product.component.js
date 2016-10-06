(function(){
	angular
	.module('app')
	.component('product', {
		templateUrl: 'app/product/product.html',
		bindings: {product: '<'},
		controller: 'productCtrl',
		controllerAs: 'vm'
	});
})();