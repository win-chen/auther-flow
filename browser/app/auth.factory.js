'use strict';

app.factory('AuthFactory', function ($http, $state, $log) {
	var Auth = {};

	Auth.signup = function (submitObj) {
		$http.post('/api/users', submitObj)
		.then(function(res) {
			$state.go('stories');
		})
		.catch($log.error);
	};

	Auth.login = function (submitObj) {
		$http.post('/login', submitObj)
		.then(function(res) {
			$state.go('stories');
		})
		.catch($log.error);
	};

	return Auth;
});
