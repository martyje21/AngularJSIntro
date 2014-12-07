angular
    .module('todoApp')
    .factory('todoDataService', todoDataService);


todoDataService.$inject = ['$http'];

function todoDataService($http) {
    return {
        add: add,
        update: update,
        remove: remove,
        get: get,
        getAll: getAll
    };

    function add(todo) {

    }

    function update(todo) {

    }

    function remove(todoId) {

    }

    function get(todoId) {

    }

    function getAll() {
        var toDos = [];

        //toDos.push({ "title": "Get this", "dueDate": "12/1/14", "overdueStyle": "background-color:red" });
        //toDos.push({ "title": "Do That", "dueDate": "1/1/15" });
        //toDos.push({ "title": "Don't forget other thing", "dueDate": "1/15/15" });

        return $http.get('http://localhost:19042/api/todos')
            .then(getAllComplete);

        function getAllComplete(response) {

            return response.data;
        }

    }

};