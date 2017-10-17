(function() {
	angular.module('Lanani').controller('homeController', ['homeFactory', function(homeFactory) {
		var vm = this;
		var cantX = 0;

		vm.bannerSlideTime = 5000;
		vm.bannerList = [];

		homeFactory.getReadTopX(cantX).then(function (rs) {
			vm.bannerList = rs.bannerList;
			validaScroll();
		}, function(err) {
			alert(err);
		});

		validaScroll(); //está en footer_jquery.js
  }]);
})();
