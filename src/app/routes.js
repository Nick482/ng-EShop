(function(){
	angular
	  .module('app')
	  .config(routesConfig);

	/** @ngInject */
	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	  $locationProvider.html5Mode(true).hashPrefix('!');
	  $urlRouterProvider.otherwise('/');

	  $stateProvider
	    .state('home', {
	      url: '/',
	      component: 'home'
	    });

	  // $stateProvider
	  //   .state('product', {
	  //     url: '/product/{productID}',
	  //     component: 'product'
	  //   });

	  // $stateProvider
	  //   .state('category', {
	  //     url: '/category/{categoryID}',
	  //     component: 'category'
	  //   });

	  // $stateProvider
	  //   .state('user', {
	  //     url: '/user/{userID}',
	  //     component: 'category'
	  //   });

	  // $stateProvider
	  //   .state('subcategory', {
	  //     url: '/subcategory/{subcategoryID}',
	  //     component: 'subcategory',
	  //     params: {
	  //     	page: 1,
	  //     	limit: 15
	  //     }
	  //   });

	  // $stateProvider
	  //   .state('search', {
	  //     url: '/search',
	  //     component: 'search',
	  //     params: {
	  //     	page: 1,
	  //     	limit: 15
	  //     }
	  //   });
	}
})();