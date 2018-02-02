(function() {
  angular.module('Lanani').controller('productDetailController', ['$state', '$http', 'resolveData', 'URL', function($state, $http, resolveData, URL) {
    var vm = this;

    vm.id = resolveData;
    vm.cant = 5;
    vm.productExist = true;
    vm.product = "";
    vm.thumbList = [];

    $http.post(URL + "/query/product-read-detail.php?id=" + vm.id).then(function (rsProd) {
      vm.productExist = true;
      vm.product = rsProd.data;

      $http.post(URL + "/query/image-read-top-x.php?id=" + vm.id + "&cant=" + vm.cant).then(function (rsImg) {
        vm.activeImage = "_img/" + rsImg.data.imageList[0].url;
        vm.thumbList = rsImg.data.imageList;
        console.log="oh"
      }, function (errImg) {
      });
		}, function (errProd) {
      vm.productExist = false;
		});

    vm.selectImage = function(imageObj) {
      vm.activeImage = "_img/" + imageObj.url;
    }

  }]);
})();
