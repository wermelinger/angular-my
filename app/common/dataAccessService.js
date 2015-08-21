var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getUser = function (userName) {
                var _this = this;
                var user = new app.domain.User();
                this.$resource("https://api.github.com/users/" + userName).get(function (data) {
                    user.login = data.login;
                    user.location = data.location;
                    user.avatar_url = data.avatar_url;
                    user.repos = _this.getRepos(data.repos_url);
                });
                return user;
            };
            DataAccessService.prototype.getRepos = function (url) {
                var repos = new Array();
                this.$resource(url).query(function (data) {
                    data.forEach(function (element) {
                        var repo = new app.domain.Repo();
                        repos.push(repo);
                        repo.name = element.name;
                        repo.description = element.description;
                    });
                });
                return repos;
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        angular.module("mycommon").service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
