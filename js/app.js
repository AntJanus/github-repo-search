function mainCtrl($scope){
	//load github
	//execute upon hitting "search"
	$scope.loadGit = function(){
		var request ={
			'sort': 'updated',
			'direction': 'desc'
		}
		$.ajax({
			type:'GET',
			url: 'https://api.github.com/users/'+$scope.username+'/repos',
			success: function(data){
				$scope.repos = data;
				return;
			}
		});
	}
	//default empty (no pre-execution)
	$scope.username = '';
	$scope.filterVar = '';
	$scope.repos = [];
	
}