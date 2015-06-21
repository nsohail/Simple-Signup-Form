var app = angular.module('myApp', []);

app.directive('optIn', function() {
	return {
		templateUrl: 'views/form.html',
		restrict: 'E',
		transclude: true,
	};
});