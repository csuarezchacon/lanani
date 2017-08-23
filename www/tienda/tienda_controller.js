(function() {
	angular.module('Lanani').controller('tiendaController', ['$http', 'URL', function($http, URL) {
	var vm = this;
	vm.titulo = "TIENDA VIRTUAL";
	vm.productList = [];
	$http.post(URL + "/query/product-read-all.php").then(function (rs) {
		vm.productList = rs.data.productList;
	}, function (err) {
		alert(err);
		vm.productList = [];
	});
  }]);
})();
