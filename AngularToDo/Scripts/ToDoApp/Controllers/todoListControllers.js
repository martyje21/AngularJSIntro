var todoListControllers = angular.module('todoListControllers', ['todoDataService']);

todoListControllers.controller('todoListController', ['$scope', 'ToDoService',
    function ($scope, ToDoService) {
        $scope.toDos = ToDoService.getAll();
    }]);

todoListControllers.controller('todoDetailController', ['$scope', 'ToDoService',
    function ($scope, ToDoService) {
    }]);