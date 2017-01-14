angular.module('app', [])
.controller('controlador', function($scope,$http){
	$scope.agregar = function(nombre){
		var data ={
			name: nombre
		}

		$http.post('http://localhost:8000/add',data)
	}

	
})