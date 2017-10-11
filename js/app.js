var app = angular.module('todoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/users.html",
        controller : "userController"
    })
    .when("/user/:id", {
        templateUrl : "templates/todos.html",
        controller : "todoController"
    })
    .otherwise({
        redirectTo: '/'
    });
}]);