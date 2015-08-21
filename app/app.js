var app;
(function (app) {
    var main = angular.module("gitViewer", ["ngRoute", "mycommon"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider", "$locationProvider"];
    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when("/search", {
            templateUrl: "/app/search/userSearchView.html",
            controller: "UserSearchCtrl as vm"
        })
            .when("/user/:userName", {
            templateUrl: "/app/user/userDetailView.html",
            controller: "UserDetailCtrl as vm"
        })
            .otherwise("/search");
        // use the HTML5 History API & set HTM5 mode true
        $locationProvider.html5Mode(true);
    }
})(app || (app = {}));
