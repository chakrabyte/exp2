app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This is a Title'; 
  $scope.promo = 'This is a promo';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19
  }
}]);
