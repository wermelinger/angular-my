module app.domain {
	export class User {
		login : string;
		location: string;
		avatar_url : string;
		repos : Repo[];
		
		constructor() {
			
		}
	}
}