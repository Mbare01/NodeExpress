
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: string[];
  private BASE_URL:string = '/api';

    constructor(private http: HttpClient) {}

    ngOnInit(): void {

      this.http.get('https://3000-abaae642-bf9e-4b1c-b607-48c05bcdfcb1.ws-eu0.gitpod.io/api').subscribe(data => {

        this.results = data['results'];
      });
    }
}

