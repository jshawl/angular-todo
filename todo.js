function TodoCtrl($scope) {
	if (localStorage["todos"]) {
		$scope.todos = JSON.parse(localStorage["todos"]);
	}else{
		$scope.todos = [{
			text:'learn angular', 
			done:true
		},{
			text:'build an angular app', 
			done:false
		}];
	}
	

	$scope.addTodo = function(){
		$scope.todos.push({text:$scope.todoText, done:false});
		localStorage["todos"] = JSON.stringify($scope.todos);
		$scope.todoText='';
	};

	$scope.remaining = function(){
		var count = 0;
		angular.forEach($scope.todos, function(todo){
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	$scope.clearDone = function(){
		var oldTodos = $scope.todos;
		$scope.todos = [];
		angular.forEach(oldTodos, function(todo){
			if(!todo.done) $scope.todos.push(todo);
		}); 
		$scope.save(); 
	};

	$scope.save = function(){
		localStorage["todos"] = JSON.stringify($scope.todos);
	};
}