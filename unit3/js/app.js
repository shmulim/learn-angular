var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Tanya';
	$scope.promo = 'Arbitrary string';
	$scope.product = {
  		name: 'The Book of Trees',
    	price: 19
  };
}]);