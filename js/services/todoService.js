
app.factory('todoService', ['$http', function($http){
    return {
        getTodosByUserId: function(id) {
           return $http.get('https://jsonplaceholder.typicode.com/todos?userId=' + id)
        },
        deleteTodo: function(id) {
            return $http.delete('https://jsonplaceholder.typicode.com/todos/' + id);
        },
        updateTodo: function(id) {
            return $http.put('https://jsonplaceholder.typicode.com/todos/' + id);
        },
        addTodo: function(data) {
            return $http.post('https://jsonplaceholder.typicode.com/todos', data);
        }
    }
}]);