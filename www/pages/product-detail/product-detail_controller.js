(function() {
  angular.module('Lanani').controller('productDetailController', ['$state', 'resolveData', function($state, resolveData) {
    var vm = this;
    vm.resolveData = resolveData;
    validaScroll();
  }]);
})();
