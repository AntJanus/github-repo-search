angular.module('gitApp', []).filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});

function mainCtrl($scope, $http){
	//load github
	//execute upon hitting "search"
	$scope.loadGit = function(username){
		var url = 'https://api.github.com/users/'+username+'/repos';
		$http({method: 'get', url: url}).success(function(data){
				$scope.repos = data;
				$scope.username = username;
		});
	}
	//default empty (no pre-execution)
	$scope.username = '';
	$scope.filterVar = '';
	$scope.repos;
	
}