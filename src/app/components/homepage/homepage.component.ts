import { Component, OnInit } from '@angular/core';
import { AmazonServiceService } from 'src/services/amazon-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data : any

  constructor( private api : AmazonServiceService){

  }

  ngOnInit(): void {
    // this.searchQuery()
  }

  searchQuery() {
    this.api.getAmazonData().subscribe( resp =>{
      console.log(resp)
      // this.data = resp.data.products[0]
    })
  }

  
}
