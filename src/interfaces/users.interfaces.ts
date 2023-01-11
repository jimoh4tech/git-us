export interface User {
	login: string;
	avatar_url: string;
	html_url?: string;
	url: string;
	name?: string;
	followers: number;
	following: number;
	bio?: string;
	public_repos?: number;
}
