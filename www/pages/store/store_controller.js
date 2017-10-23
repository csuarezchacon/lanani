(function() {
	angular.module('Lanani').controller('storeController', ['$http', 'URL', function($http, URL) {
		var vm = this;
		vm.productList = [];
		vm.cantProd = 8;
		$http.post(URL + "/query/product-read-top-x.php?cantProd=" + vm.cantProd).then(function (rs) {
			vm.productList = rs.data.productList;
			 validaScroll(); //está en footer_jquery.js
		}, function (err) {
			alert(err);
			vm.productList = [];
		});
  }]);
})();
