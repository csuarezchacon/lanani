(function () {
	angular.module('Lanani').directive('productThumbDirective', [ 'URL', function (URL) {
		return {
			controller: 'productThumbController',
			controllerAs: 'ptc',
			scope: {product: "=?product"},
			templateUrl: URL + "/www/directives/product-thumb/product-thumb.html"
		};
	}]);
})();
