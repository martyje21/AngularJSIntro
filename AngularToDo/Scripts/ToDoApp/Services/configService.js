(function () {
    angular
        .module('todoApp')
        .factory('configService', configService);

    configService.$inject = ['$http'];

    function configService($http) {
        return {
            todoApiUrl: todoApiUrl
        };


        function todoApiUrl() {
            return 'http://localhost:19042/api/todos';
        }
    }

})();