(function () {

    angular
        .module('todoApp')
        .factory('todoDataService', todoDataService);


    todoDataService.$inject = ['$http', 'configService'];

    function todoDataService($http, configService) {
        return {
            getList: getList,
            add: add,
            update: update,
            remove: remove,
            get: get
        };


        function getList() {
            //var toDos = [];

            //toDos.push({ "title": "Get this", "dueDate": "12/1/14", "overdueStyle": "background-color:red" });
            //toDos.push({ "title": "Do That", "dueDate": "1/1/15" });
            //toDos.push({ "title": "Don't forget other thing", "dueDate": "1/15/15" });

            return $http.get(configService.todoApiUrl())
                .then(getAllComplete);

            function getAllComplete(response) {
                var today = new Date();

                var len = response.data.length;
                var todos = response.data;

                for (var i = 0; i < len; i++) {
                    var dd = new Date(todos[i].dueDate);
                    if (dd < today){                    
                        todos[i].overdue = true;
                    }
                    else {
                        todos[i].overdue = false;
                    }

                    todos[i].formattedDueDate = (dd.getMonth() + 1) + "/" + dd.getDate() + "/" + dd.getFullYear();

                }

                return todos;
            }
        }

        function add(todo) {

        }

        function update(todo) {

        }

        function remove(todoId) {

        }

        function get(todoId) {

        }


    };

})();