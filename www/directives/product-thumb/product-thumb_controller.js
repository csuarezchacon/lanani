(function () {
	angular.module('Lanani').controller('productThumbController', ['$scope', "$state", function ($scope, $state) {
		var vm = this;
		vm.product = $scope.product;
		vm.fncGoTo = function(id) {
			$state.go("product-detail", {id: id});
		}
	}]);
}) ()
