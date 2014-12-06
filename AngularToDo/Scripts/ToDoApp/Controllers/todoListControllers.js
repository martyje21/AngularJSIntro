
angular
    .module('todoApp')
    .controller('todoListController', todoListController);

todoListController.$inject['todoDataService'];


function todoListController(todoDataService)
{
    var vm = this;
    vm.toDos = todoDataService.getAll();

}

