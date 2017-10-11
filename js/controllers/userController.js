app.controller('userController', ['$scope', 'userService', '$location', function($scope, userService, $location){
    
    // load all users
    userService.getAllUsers().then(function (response) {
        $scope.users = response.data;
    }, function (error) {
        $scope.error = 'Unable to load user data: ' + error.message;
    });

    $scope.viewTodo = function(id) {
        $location.path('/user/' + id);
    }
}]);

