module app.common {
	interface IDataAccessService {
		getUser(userName : string): app.domain.User;
	}

	export class DataAccessService implements IDataAccessService {
		static $inject = ["$resource"]
		constructor(private $resource : ng.resource.IResourceService) {
			
		}
		
		getUser(userName : string): app.domain.User {
			var user = new app.domain.User();
			this.$resource("https://api.github.com/users/" + userName).get(data => {
					user.login = data.login;
					user.location = data.location;
					user.avatar_url = data.avatar_url;
					user.repos = this.getRepos(data.repos_url);
				});
			
			return user;
		}
		
		getRepos(url : string): Array<app.domain.Repo> {
			var repos = new Array<app.domain.Repo>();
			this.$resource(url).query(data => {
					data.forEach(element => {
						var repo = new app.domain.Repo();
						repos.push(repo);
						repo.name = element.name;
						repo.description = element.description;
					});
				});
			
			return repos;
		}
	}
	
	angular.module("mycommon").service("dataAccessService", DataAccessService);
}