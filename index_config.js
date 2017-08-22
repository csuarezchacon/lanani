(function (){
	angular.module('Lanani').config(
	['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('/', {
			parent: 'root',
			templateUrl: 'index.html',
			url: '/'
		})
		.state('tienda', {
			url: '/tienda',
			templateUrl: 'www/tienda.html'
		})
		.state('sobre', {
			url: '/sobre',
			templateUrl: 'www/sobre.html'
		})
		.state('eventos', {
			url: '/eventos',
			templateUrl: 'www/eventos.html'
		})
		.state('contacto', {
			url: '/contacto',
			templateUrl: 'www/contacto.html'
		});
}]);
})();
