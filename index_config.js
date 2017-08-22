(function (){
	angular.module('Lanani').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'www/home/home.html',
			controller: 'homeController',
			controllerAs: 'vmHome'
		})
		.state('tienda', {
			url: '/tienda',
			templateUrl: 'www/tienda/tienda.html',
			controller: 'tiendaController',
			controllerAs: 'vmTienda'
		})
		.state('sobre', {
			url: '/sobre',
			templateUrl: 'www/sobre/sobre.html',
			controller: 'sobreController',
			controllerAs: 'vmSobre'
		})
		.state('eventos', {
			url: '/eventos',
			templateUrl: 'www/eventos/eventos.html',
			controller: 'eventosController',
			controllerAs: 'vmEventos'
		})
		.state('contacto', {
			url: '/contacto',
			templateUrl: 'www/contacto/contacto.html',
			controller: 'contactoController',
			controllerAs: 'vmContacto'
		});
}]);
})();
