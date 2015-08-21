module app.user {
	interface IUserDetailModel {
		user : app.domain.User;
	}
	
	interface IProductParams extends ng.route.IRouteParamsService {
		userName: string;
	}
	
	class UserDetailCtrl implements IUserDetailModel {
		user : app.domain.User;
		
		static $inject=["$location", "$routeParams", "dataAccessService"]
		constructor(private $location: ng.ILocationService, 
					private $routeParams : IProductParams,
					private dataAccessService : app.common.DataAccessService) {
			this.user = dataAccessService.getUser($routeParams.userName);
		}
	}
	
	angular.module("gitViewer").controller("UserDetailCtrl", UserDetailCtrl);
}