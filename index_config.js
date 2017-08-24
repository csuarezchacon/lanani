(function (){
	angular.module('Lanani').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'www/pages/home/home.html',
			controller: 'homeController',
			controllerAs: 'vmHome'
		})
		.state('tienda', {
			url: '/tienda',
			templateUrl: 'www/pages/tienda/tienda.html',
			controller: 'tiendaController',
			controllerAs: 'vmTienda'
		})
		.state('sobre', {
			url: '/sobre',
			templateUrl: 'www/pages/sobre/sobre.html',
			controller: 'sobreController',
			controllerAs: 'vmSobre'
		})
		.state('eventos', {
			url: '/eventos',
			templateUrl: 'www/pages/eventos/eventos.html',
			controller: 'eventosController',
			controllerAs: 'vmEventos'
		})
		.state('contacto', {
			url: '/contacto',
			templateUrl: 'www/pages/contacto/contacto.html',
			controller: 'contactoController',
			controllerAs: 'vmContacto'
		});
}]);
})();
