(function() {
	angular.module('Lanani').factory('homeFactory', ['$http', 'URL', '$q', function($http, URL, $q) {
    var vm = this;
    return { getReadTopX: getReadTopX };

    function getReadTopX (cantBanner) {
      var promise = $q.defer();
      $http.post(URL + "/query/banner-read-top-x.php?cant=" + cantBanner).then(function (rs) {
        promise.resolve(rs.data);
  		}, function (err) {
        promise.reject(err);
  		});
      return promise.promise;
    }
  }]);
})();
