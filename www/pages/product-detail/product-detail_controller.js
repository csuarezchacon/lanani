(function() {
  angular.module('Lanani').controller('productDetailController', ['$state', '$http', 'resolveData', 'URL', function($state, $http, resolveData, URL) {
    var vm = this;

    vm.id = resolveData;
    vm.productExist = true;

    $http.post(URL + "/query/product-read-detail.php?id=" + vm.id).then(function (rs) {
      vm.productExist = true;
		}, function (err) {
      vm.productExist = false;
		});

  }]);
})();
