import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmazonServiceService {
  private apiUrl = 'https://real-time-amazon-data.p.rapidapi.com';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'ed9b384d60msh9985f18f378ab9dp15423ajsncb686e87e938',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  search(query : string): any {
    return this.http.get(`${this.apiUrl}/search?query=${query}&page=1&country=IN&category_id=aps`, { headers: this.headers });
  }

  productDetails(asin : string): any {
    return this.http.get(`${this.apiUrl}/product-details?asin=${asin}&country=US`, { headers: this.headers });
  }

  productOffers(asin : string): any {
    return this.http.get(`${this.apiUrl}/product-offers?asin=${asin}&country=US&limit=100&page=1`, { headers: this.headers });
  }
  
  productReviews(asin : string): any {
    return this.http.get(`${this.apiUrl}/product-reviews?asin=${asin}&country=US&verified_purchases_only=false&images_or_videos_only=false&current_format_only=false&page=1`, { headers: this.headers });
  }

  bestSellers(category : string): any {
    return this.http.get(`${this.apiUrl}/best-sellers?category=${category}&page=1&country=US`, { headers: this.headers });
  }

  deals(): any {
    return this.http.get(`${this.apiUrl}/deals?country=US`, { headers: this.headers });
  }

  dealProducts(deal : string): any {
    return this.http.get(`${this.apiUrl}/deal-products?deal_id=${deal}&country=US&page=1`, { headers: this.headers });
  }

  productCategoryList() : any {
    return this.http.get(`${this.apiUrl}/product-category-list?country=US` , { headers: this.headers })
  }
}

