import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/productDetails';
import { AmazonServiceService } from 'src/services/amazon-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  asin: string ;
  details : Product | null = null;

  constructor (private route: ActivatedRoute, private api : AmazonServiceService) {}

  ngOnInit(): void {
    // Subscribe to the route params to capture the ASIN parameter
    this.route.paramMap.subscribe(params => {
      this.asin = params.get('asin');
      // Now you can use this.asin to pass it through the API
      if (this.asin) {
        this.getProductDetails()
      }
    });
    
  }

  getProductDetails(){
    this.api.productDetails(this.asin).subscribe(resp =>{
      this.details = resp.data
      console.log(this.details)
    })
  }

  // getAspectClass(sentiment: string): string {
  //   switch (sentiment) {
  //     case 'POSITIVE':
  //       return 'positive';
  //     case 'MIXED':
  //       return 'mixed';
  //     case 'NEGATIVE':
  //       return 'negative';
  //     default:
  //       return '';
  //   }
  // }

  // isReviewAspectsAvailable(): boolean {
  //   return this.details && this.details.review_aspects;
  // }

}
