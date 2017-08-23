(function () {
	angular.module('Lanani').directive('productSlightDirective', [ 'URL', function (URL) {
		return {
			controller: 'productSlightController',
			controllerAs: 'psc',
			scope: {product: "=?product"},
			templateUrl: URL + "/www/directives/product/product-slight.html"
		};
	}]);
})();
