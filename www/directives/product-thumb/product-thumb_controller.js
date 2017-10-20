(function () {
	angular.module('Lanani').controller('productThumbController', ['$scope', function ($scope) {
		var vm = this;
		vm.product = $scope.product;
	}]);
}) ()
