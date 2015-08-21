var app;
(function (app) {
    var domain;
    (function (domain) {
        var User = (function () {
            function User() {
            }
            return User;
        })();
        domain.User = User;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
