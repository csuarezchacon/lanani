(function (){
	angular.module('Lanani').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('main', {
			url: '/',
			controller: 'indexController',
			controllerAs: 'vm',
			ncyBreadcrumb: {
				label: ' '
			}
		})
		.state('main.home', {
			url: 'home',
			controller: 'homeController',
			controllerAs: 'vmHome',
			ncyBreadcrumb: {
				label: 'Home',
				parent: 'main'
			},
			templateUrl: 'www/pages/home/home.html'
		})
		.state('main.store', {
			url: 'store',
			controller: 'storeController',
			controllerAs: 'vmStore',
			ncyBreadcrumb: {
				label: 'Tienda',
				parent: 'main'
			},
			templateUrl: 'www/pages/store/store.html'
		})
		.state('main.store.productdetail', {
			url: '/product-detail',
			controller: 'productDetailController',
			controllerAs: 'vmProductDetail',
			ncyBreadcrumb: {
				label: 'Detalle Producto',
				parent: 'main.store'
			},
			templateUrl: 'www/pages/product-detail/product-detail.html'
		})
		.state('main.about', {
			url: 'about',
			controller: 'aboutController',
			controllerAs: 'vmAbout',
			ncyBreadcrumb: {
				label: 'Sobre',
				parent: 'main'
			},
			templateUrl: 'www/pages/about/about.html'
		})
		.state('main.fair', {
			url: 'fair',
			controller: 'fairController',
			controllerAs: 'vmFair',
			ncyBreadcrumb: {
				label: 'Eventos',
				parent: 'main'
			},
			templateUrl: 'www/pages/fair/fair.html'
		})
		.state('main.contact', {
			url: 'contact',
			controller: 'contactController',
			controllerAs: 'vmContact',
			ncyBreadcrumb: {
				label: 'Contacto'
			},
			templateUrl: 'www/pages/contact/contact.html'
		});
}]);
})();
