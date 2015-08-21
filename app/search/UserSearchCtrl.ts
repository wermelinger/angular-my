module app.search {
	interface IUserSearchModel {
		userName : string;
		search() : void;
	}
	
	class UserSearchCtrl implements IUserSearchModel {
		userName : string;
		
		static $inject=["$location"]
		constructor(private $location: ng.ILocationService) {
		}
		
		search() : void {
			this.$location.path("/user/" + this.userName);
		}
	}
	
	angular.module("gitViewer").controller("UserSearchCtrl", UserSearchCtrl);
}