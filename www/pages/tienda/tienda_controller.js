(function() {
	angular.module('Lanani').controller('tiendaController', ['$http', 'URL', function($http, URL) {
	var vm = this;
	vm.productList = [];
	$http.post(URL + "/query/product-read-all.php").then(function (rs) {
		vm.productList = rs.data.productList;
		 validaScroll(); //está en footer_jquery.js
	}, function (err) {
		alert(err);
		vm.productList = [];
	});
  }]);
})();
