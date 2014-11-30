var todoDataService = angular.module('todoDataService', []);

todoDataService.service('ToDoService',
    function () {

        this.add = function (todo) {

        };

        this.update = function (todo) {

        };

        this.remove = function (todoId) {

        };

        this.get = function (todoId) {

        };

        this.getAll = function () {
            var toDos = [];

            toDos.push({"title":"Get this", "dueDate":"12/1/14", "overdueStyle": "background-color:red"});
            toDos.push({"title": "Do That", "dueDate":"1/1/15" });
            toDos.push({"title": "Don't forget other thing", "dueDate":"1/15/15"});

            return toDos;
        };

    });