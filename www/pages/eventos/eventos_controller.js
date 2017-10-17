(function() {
	angular.module('Lanani').controller('eventosController', ['$state', function($state) {
	var vm = this;
	vm.path = $state.router.urlRouter.location;
	validaScroll(); //está en footer_jquery.js
  }]);
})();
