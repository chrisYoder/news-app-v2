import { Component } from '@angular/core';
import { LINKS } from '../links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	
	links = LINKS;
	
  constructor() { }

  getArticles(link){
		
		console.log(link.slug);
	}

	// so i can access the links array
}
