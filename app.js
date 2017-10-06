var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "main.html"})
  .when("/london", {
      templateUrl : "london.html",
      controller: 'londonCtrl'
  })
  .when("/paris", {
      templateUrl : "paris.html",
      controller: 'parisCtrl'
  })
  .when('/moscow', {
      template: "<h1>Moscow is capital city of Russian Federation"
  })
});

app.controller('londonCtrl', function($scope) {
    $scope.msg = 'I love London';
});

app.controller('parisCtrl', function($scope){
    $scope.msg = 'I love Paris';
    $scope.showMsg = false;
    $scope.handleClick = function() {
        $scope.showMsg = !$scope.showMsg;
    }
});