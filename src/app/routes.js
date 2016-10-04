angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  //////////////////////////////////////////
  // params: { hiddenOne: null, }
  //////////////////////////////////////////

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });

  $stateProvider
    .state('product', {
      url: '/product/{productID}',
      component: 'product'
    });

  $stateProvider
    .state('category', {
      url: '/category/{categoryID}',
      component: 'category'
    });

  $stateProvider
    .state('subcategory', {
      url: '/subcategory/{subcategoryID}',
      component: 'subcategory'
    });

  $stateProvider
    .state('search', {
      url: '/search',
      component: 'search'
    });
}
