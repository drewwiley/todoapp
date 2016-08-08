var todoApp = angular.module('todoApp', []);
todoApp.controller('todoController', function($scope) {
	$scope.list = [
	"groceries",
	"laundry",
	"bills"];

	$scope.removeItem = function(index) {
		$scope.list.splice(index, 1)
		console.log(index);
	}

	$scope.clearInput = function () {
		$scope.newItem = "";
	}

	$scope.addItem = function() {
		$scope.list.push($scope.newItem)
		$scope.newItem = "";

	}

});