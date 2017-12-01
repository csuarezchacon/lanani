(function() {
  angular.module('Lanani').controller('productDetailController', ['$state', '$http', 'resolveData', 'URL', function($state, $http, resolveData, URL) {
    var vm = this;

    vm.id = resolveData;
    vm.productExist = true;
    vm.product = "";
    vm.gallery = {};

    $http.post(URL + "/query/product-read-detail.php?id=" + vm.id).then(function (rs) {
      vm.productExist = true;
      vm.product = rs.data;
      vm.product.activeImg = '_img/' + rs.data.url_image_principal;
		}, function (err) {
      vm.productExist = false;
		});

  }]);
})();
