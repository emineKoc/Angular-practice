var app = angular.module('computer',['ngRoute']);

.config(['$routeProvider', function(){
      $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({redirectTo: "/main"})

}])

.controller('MainCtrl',  ['$scope', function($scope){
}])

.controller('AboutCtrl',  ['$scope', function($scope){
}])
