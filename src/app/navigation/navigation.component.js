(function(){
	angular
	.module('app')
	.component('navigation', {
		templateUrl: 'app/navigation/navigation.html',
		controller: 'navigationCtrl',
		controllerAs: 'vm'
	});
})();