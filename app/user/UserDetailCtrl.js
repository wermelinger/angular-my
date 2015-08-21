var app;
(function (app) {
    var user;
    (function (user) {
        var UserDetailCtrl = (function () {
            function UserDetailCtrl($location, $routeParams, dataAccessService) {
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.user = dataAccessService.getUser($routeParams.userName);
            }
            UserDetailCtrl.$inject = ["$location", "$routeParams", "dataAccessService"];
            return UserDetailCtrl;
        })();
        angular.module("gitViewer").controller("UserDetailCtrl", UserDetailCtrl);
    })(user = app.user || (app.user = {}));
})(app || (app = {}));
