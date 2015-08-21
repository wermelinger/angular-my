var app;
(function (app) {
    var search;
    (function (search) {
        var UserSearchCtrl = (function () {
            function UserSearchCtrl($location) {
                this.$location = $location;
            }
            UserSearchCtrl.prototype.search = function () {
                this.$location.path("/user/" + this.userName);
            };
            UserSearchCtrl.$inject = ["$location"];
            return UserSearchCtrl;
        })();
        angular.module("gitViewer").controller("UserSearchCtrl", UserSearchCtrl);
    })(search = app.search || (app.search = {}));
})(app || (app = {}));
