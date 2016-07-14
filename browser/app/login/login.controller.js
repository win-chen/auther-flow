'use strict';

app.controller('LoginCtrl', function($scope, AuthFactory) {
	$scope.submitLogin = function() {
		var submitObj = {
			email: $scope.email,
			password: $scope.password
		}
		AuthFactory.login(submitObj);
	}
});
