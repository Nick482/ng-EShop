(function(){
	angular
	.module('app')
	.controller('menuCtrl', menuCtrl);

	/** @ngInject */
	function menuCtrl(httpService, routingService){
		var vm = this;
		vm.searchText;
		vm.selectedItem;


		vm.querySearch = function(text){
			return httpService.querySearch(text).then(function(res){
				return res;
			});
		}

		vm.selectedItemChange = function(item){
			vm.searchText = item.title;
		}

		vm.search = routingService.goToSearch;
	}
})();