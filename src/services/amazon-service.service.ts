import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmazonServiceService {
  private apiUrl = 'https://real-time-amazon-data.p.rapidapi.com';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e48e1723e4msh1cc7058612a9ec0p19913cjsn526d9ef23678',
    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getAmazonData(): any {
    return this.http.get(`${this.apiUrl}/search?query=Phone&page=1&country=US&category_id=aps`, { headers: this.headers });
  }
}
