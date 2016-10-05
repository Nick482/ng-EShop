(function(){
	angular
	.module('app')
	.component('home', {
		templateUrl: 'app/home/home.html',
		bindings: {categories: '<'},
		controller: 'homeCtrl',
		controllerAs: 'vm'
	});
})();