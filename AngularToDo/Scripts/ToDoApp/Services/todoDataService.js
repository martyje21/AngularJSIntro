(function () {

    angular
        .module('todoApp')
        .factory('todoDataService', todoDataService);


    todoDataService.$inject = ['$http', 'configService'];

    function todoDataService($http, configService) {
        return {
            add: add,
            update: update,
            remove: remove,
            get: get,
            getList: getList
        };

        function add(todo) {

        }

        function update(todo) {

        }

        function remove(todoId) {

        }

        function get(todoId) {

        }

        function getList() {
            var toDos = [];

            toDos.push({ "title": "Get this", "dueDate": "12/1/14", "overdueStyle": "background-color:red" });
            toDos.push({ "title": "Do That", "dueDate": "1/1/15" });
            toDos.push({ "title": "Don't forget other thing", "dueDate": "1/15/15" });

            //return $http.get(configService.todoApiUrl())
            //    .then(getAllComplete);
        }

        function getAllComplete(response) {
            var today = new Date();

            var len = response.data.length;
            var todos = response.data;

            for (var i = 0; i < len; i++) {
                if (new Date(todos[i].dueDate) < today)
                    todos[i].overdueStyle = "background-color:red";

            }

            return todos;
        }

    };

})();