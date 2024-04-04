import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse, Product } from 'src/models/searchData';
import { AmazonServiceService } from 'src/services/amazon-service.service';
import { UiServiceService } from 'src/services/ui-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchQuery: string = '';
  results : any
  hardcodedStarRating: number = 3.5;
  apiResponse: ApiResponse | null = null;
  products : Product [] = []
  searchResponse : any
  total_products: any;
  activeAccordion: number | null = null;

  constructor(private route: ActivatedRoute, private searchService: UiServiceService, private api : AmazonServiceService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'] || '';
      this.searchService.sendSearchQuery(this.searchQuery);
      // Perform search operation using the query
      console.log(this.searchQuery)
    });
    if (this.searchQuery) {
      this.getSearchQuery()
    }
    
  }

  toggleAccordion(index: number): void {
    if (this.activeAccordion === index) {
      this.activeAccordion = null; // Collapse the accordion if already active
      console.log(this.activeAccordion)
    } else {
      this.activeAccordion = index; // Expand the clicked accordion
      console.log(this.activeAccordion)
    }
  }

  expandAll(): void {
    for (let i = 1; i <= 11; i++) {
      // this.activeAccordion = i; // Expand all accordions
      // console.log(this.activeAccordion)  
      this.toggleAccordion(i)
    }
  }

  collapseAll(): void {
    this.activeAccordion = null; // Collapse all accordions
  }

  generateStarRating(rating: number): string {
    const maxRating = 4;
    const roundedRating = Math.min(Math.max(0, rating), maxRating);
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
    let starsHtml = '';
  
    // Generate full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<span class="star">&#9733;</span>'; // Full star
    }
  
    // Generate half star if necessary
    if (hasHalfStar) {
      starsHtml += '<span class="star">&#9733;&#9734;</span>'; // Half star
    }
  
    // Generate empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<span class="star">&#9734;</span>'; // Empty star
    }
  
    return starsHtml;
  }
  
  
  

  getSearchQuery() {
    this.api.search(this.searchQuery).subscribe( (response: ApiResponse) =>{
      console.log(response)
      this.total_products = response.data.total_products
      this.products = response.data.products;
      this.results = this.products.length
      console.log(this.products)
    })
  }

}
