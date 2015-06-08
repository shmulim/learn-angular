var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Tanya';
	$scope.promo = 'Arbitrary string';
}]);