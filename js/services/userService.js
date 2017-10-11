app.factory('userService', ['$http', function($http){
    return {
        getAllUsers: function() {
           return $http.get('https://jsonplaceholder.typicode.com/users')
        }
    }
}]);

