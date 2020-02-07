import { Component } from '@angular/core';
import { LINKS } from '../links';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	
	links = LINKS;
	
  constructor(private apiService: ApiService) { }

  getArticles(link){
		
		this.apiService.setSlug(link.slug);
	}

	// so i can access the links array
}
