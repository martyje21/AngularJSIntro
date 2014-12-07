
angular
    .module('todoApp')
    .controller('todoListController', todoListController);

todoListController.$inject['todoDataService'];


function todoListController(todoDataService)
{
    var vm = this;
    vm.toDos = [];

    activate();

    function activate() {
        return getToDos().then(function () {
            //log info
        });
    }


    function getToDos() {
        return todoDataService.getAll()
            .then(function (data) {
                vm.toDos = data;
                return vm.toDos;
            });
    }

}

