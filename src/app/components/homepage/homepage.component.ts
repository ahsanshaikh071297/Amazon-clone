import { Component, OnInit } from '@angular/core';
import { BestSellers } from 'src/models/bestSellers';
import { Deals } from 'src/models/deals';
import { List } from 'src/models/productCategoryList';
import { Details } from 'src/models/productDetails';
import { Reviews } from 'src/models/productReview';
import { ApiResponse } from 'src/models/searchData';
import { AmazonServiceService } from 'src/services/amazon-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  search : string = "samsung"
  asin : string = "B07VF6NSZZ"
  category : string = "software"
  apiResponse: ApiResponse | null = null;
  list : List | null = null; 
  details : Details | null = null;
  reviews : Reviews | null = null;
  bestSeller : BestSellers | null = null;
  deals : Deals | null = null;

  constructor( private api : AmazonServiceService){}

  ngOnInit(): void {
    // this.getDeals()
  }

  searchQuery() {
    this.api.search(this.search).subscribe( resp =>{
      this.apiResponse = resp
      console.log(this.apiResponse)
    })
  }

  categoryList () {
    this.api.productCategoryList().subscribe ( resp => {
      this.list = resp
      console.log(this.list)
    })
  }

  productDetails () {
    this.api.productDetails(this.asin).subscribe ( resp =>{
      this.details = resp
      console.log(this.details)
    })
  }

  productReviews(){
    this.api.productReviews(this.asin).subscribe (resp =>{
      this.reviews = resp
      console.log(this.reviews)
    })
  }

  bestSellers(){
    this.api.bestSellers(this.category).subscribe(resp =>{
      this.bestSeller = resp
      console.log(this.bestSeller)
    })
  }

  getDeals(){
    this.api.deals().subscribe(resp =>{
      this.deals = resp
      console.log(this.deals)
    })
  }

  
}
