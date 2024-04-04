import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/services/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = '';

  constructor(private searchService: UiServiceService, private router: Router) { }

  onSearch(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }

  onSearchButtonClick(): void {
    this.searchService.sendSearchQuery(this.searchQuery);
    this.router.navigate(['/search-result'], { queryParams: { q: this.searchQuery } });
  }

}
