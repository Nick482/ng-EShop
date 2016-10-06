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
		  component: 'home',
		  resolve: {
		  	categories: function(httpService){
		  		return httpService.getCategories();
		  	}
		  }
		});

		$stateProvider
		.state('product', {
		  url: '/product/{productID}',
		  component: 'product',
		  resolve: {
		  	product: function(httpService, $stateParams){
		  		return httpService.getProduct($stateParams.productID);
		  	}
		  }
		});

		$stateProvider
		.state('category', {
		  url: '/category/{categoryID}',
		  component: 'category',
		  resolve: {
		  	subcategories: function(httpService, $stateParams) {
		  		return httpService.getSubcategories($stateParams.categoryID);
		  	}
		  }
		});

		  // $stateProvider
		  //   .state('user', {
		  //     url: '/user/{userID}',
		  //     component: 'category'
		  //   });

		$stateProvider
		.state('subcategory', {
		  url: '/subcategory/{subcategoryID}',
		  component: 'subcategory',
		  params: {
		  	page: 1,
		  	limit: 15
		  },
		  resolve: {
		  	products: function(httpService, $stateParams) {
		  		return httpService.getSubcategory($stateParams.subcategoryID, $stateParams.page, $stateParams.limit);
		  	}
		  }
		});

		$stateProvider
		.state('search', {
		  url: '/search/{text}',
		  component: 'search',
		  params: {
		  	page: 1,
		  	limit: 15
		  },
		  resolve: {
		  	results: function(httpService, $stateParams){
		     	return httpService.getSearchResults($stateParams.text, $stateParams.page, $stateParams.limit)
				}
		  }
		});
	}
})();