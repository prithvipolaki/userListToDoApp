app.controller('todoController', ['$scope', 'todoService', '$routeParams', function($scope, todoService, $routeParams){
    todoService.getTodosByUserId($routeParams.id).then(function (response) {
        $scope.user = response.data;
    }, function (error) {
        $scope.error = 'Unable to load user data: ' + error.message;
    });
}]);