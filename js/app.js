angular.module('gitApp', []).filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});

function mainCtrl($scope){
	//load github
	//execute upon hitting "search"
	$scope.loadGit = function(username){
		$.ajax({
			type:'GET',
			url: 'https://api.github.com/users/'+username+'/repos',
			success: function(data){
				$scope.repos = data;
				$scope.username = username;
				//this is what happens when you use jQuery kids, be careful
				$scope.$apply();
			}
		});
	}
	//default empty (no pre-execution)
	$scope.username = '';
	$scope.filterVar = '';
	$scope.repos;
	
}