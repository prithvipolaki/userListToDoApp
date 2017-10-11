app.controller('todoController', ['$scope', 'todoService', '$routeParams', function($scope, todoService, $routeParams){
    todoService.getTodosByUserId($routeParams.id).then(function (response) {
        $scope.todos = response.data;
    }, function (error) {
        $scope.error = 'Unable to load user data: ' + error.message;
    });

    $scope.deleteTodo = function(index, id){
        var confirmDelete = confirm("Are you sure want to delete Todo!");
        if(confirmDelete) {
            todoService.deleteTodo(id).then(function (response) {
                if(response.status && response.status === 200) {
                    $scope.todos.splice(index, 1);
                }            
            }, function (error) {
                $scope.error = 'Unable to load user data: ' + error.message;
            });
        }        
    };
    $scope.updateTodo = function(index, id){        
        todoService.updateTodo(id).then(function (response) {
            if(response.status && response.status === 200) {
                console.log('status changed successfully');
            }            
        }, function (error) {
            $scope.error = 'Unable to load user data: ' + error.message;
        });                
    };

    $scope.saveTodo = function(){
        if($scope.addToDo === undefined || $scope.addToDo.trim().length === 0) {
            return false
        }
        var data = {            
            "title": $scope.addToDo,
            "completed": false
        };        
        todoService.addTodo(data).then(function (response) {
            if(response.status && response.status === 201) {                
                $scope.todos.push(response.data);
                $scope.addToDo = '';
            }            
        }, function (error) {
            $scope.error = 'Unable to load user data: ' + error.message;
        });                
    };
    
}]);