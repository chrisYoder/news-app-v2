import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
	articles: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.getNews().subscribe( data => this.articles = data['articles']);
		
		
		console.log(this.articles)
  }

}
