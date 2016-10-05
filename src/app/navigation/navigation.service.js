(function(){
	angular
	.module('app')
	.factory('navigationService', navigationService);

	/** @ngInject */
	function navigationService($http, $q, $state, $stateParams) {
		return {
			openMenu: openMenu
		}

		function openMenu($mdOpenMenu, ev) {
			$mdOpenMenu(ev);
		}
	}
})();