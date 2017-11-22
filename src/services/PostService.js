const WEB_API_URL = "https://jsonplaceholder.typicode.com/";

export default class PostService {

    getPosts() {
		var url = WEB_API_URL + 'posts';
		return fetch(url).then((response) => response.json());
	}
}