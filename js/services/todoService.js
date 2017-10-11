
app.factory('todoService', ['$http', function($http){
    return {
        getTodosByUserId: function(id) {
           return $http.get('https://jsonplaceholder.typicode.com/todos?userId=' + id)
        }
    }
}]);