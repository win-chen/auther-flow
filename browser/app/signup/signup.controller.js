'use strict';

app.controller('SignupCtrl', function($scope, AuthFactory) {
	$scope.submitSignup = function () {
		var submitObj = {
			email: $scope.email,
			password: $scope.password
		}

		AuthFactory.signup(submitObj);
	}
});