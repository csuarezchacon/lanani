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
		.state('main.tienda', {
			url: 'tienda',
			controller: 'tiendaController',
			controllerAs: 'vmTienda',
			ncyBreadcrumb: {
				label: 'Tienda',
				parent: 'main'
			},
			templateUrl: 'www/pages/tienda/tienda.html'
		})
		.state('main.sobre', {
			url: 'sobre',
			controller: 'sobreController',
			controllerAs: 'vmSobre',
			ncyBreadcrumb: {
				label: 'Sobre',
				parent: 'main'
			},
			templateUrl: 'www/pages/sobre/sobre.html'
		})
		.state('main.eventos', {
			url: 'eventos',
			controller: 'eventosController',
			controllerAs: 'vmEventos',
			ncyBreadcrumb: {
				label: 'Eventos',
				parent: 'main'
			},
			templateUrl: 'www/pages/eventos/eventos.html'
		})
		.state('main.contacto', {
			url: 'contacto',
			controller: 'contactoController',
			controllerAs: 'vmContacto',
			ncyBreadcrumb: {
				label: 'Contacto'
			},
			templateUrl: 'www/pages/contacto/contacto.html'
		});
}]);
})();
