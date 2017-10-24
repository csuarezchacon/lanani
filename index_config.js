(function (){
	angular.module('Lanani').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			controller: 'homeController',
			controllerAs: 'vmHome',
			ncyBreadcrumb: {
				label: 'Home'
			},
			templateUrl: 'www/pages/home/home.html'
		})
		.state('store', {
			url: '/tienda',
			controller: 'storeController',
			controllerAs: 'vmStore',
			ncyBreadcrumb: {
				label: 'Tienda'
			},
			templateUrl: 'www/pages/store/store.html'
		})
		.state('product-detail', {
			url: '/tienda/detalle-producto/:id',
			controller: 'productDetailController',
			controllerAs: 'vmProductDetail',
			ncyBreadcrumb: {
				label: 'Detalle Producto',
				parent: 'store'
			},
			resolve: {
				resolveData: ['$stateParams', function($stateParams) {
					return $stateParams.id;
				}]
			},
			templateUrl: 'www/pages/product-detail/product-detail.html'
		})
		.state('about', {
			url: '/sobre',
			controller: 'aboutController',
			controllerAs: 'vmAbout',
			ncyBreadcrumb: {
				label: 'Sobre'
			},
			templateUrl: 'www/pages/about/about.html'
		})
		.state('fair', {
			url: '/evento',
			controller: 'fairController',
			controllerAs: 'vmFair',
			ncyBreadcrumb: {
				label: 'Eventos'
			},
			templateUrl: 'www/pages/fair/fair.html'
		})
		.state('contact', {
			url: '/contacto',
			controller: 'contactController',
			controllerAs: 'vmContact',
			ncyBreadcrumb: {
				label: 'Contacto'
			},
			templateUrl: 'www/pages/contact/contact.html'
		});
}]);
})();
