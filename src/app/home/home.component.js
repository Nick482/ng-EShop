(function(){
	angular
	.module('app')
	.component('home', {
		templateUrl: 'app/home/home.html',
		controller: 'homeCtrl',
		controllerAs: 'vm'
	});
})();