(function (){
  angular.module('MblLanani').config(
    ['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('/', {
      parent: 'root',
      templateUrl: 'index.html',
      url: '/'
    });
  }]);
})();
