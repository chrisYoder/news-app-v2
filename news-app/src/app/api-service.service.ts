import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	API_KEY: string = "7ef821ce05654f9e8aab706504eb0506"; 
	// I don't think that newapi.org will have a problem with not having this hidden because they openly display the 
	// api key of users that are logged in.
	
  constructor(private httpClient: HttpClient) { }
	
	slug: string;
	
	setSlug(slug: string){
		// console.log(`slug ${slug} is coming from api-service`);
		this.slug = slug;
		this.getNews();
	}
	
	getNews(){
		 this.httpClient.get(`this is from the getNews() method https://newsapi.org/v2/top-headlines?${this.slug}&apiKey="${this.API_KEY}`);
		
	}
	
	
}
