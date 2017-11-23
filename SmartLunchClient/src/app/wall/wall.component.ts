import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartLunchApiService } from '../services/smart-lunch-api.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  providers: [ SmartLunchApiService ],
})
export class WallComponent implements OnInit {

  protected restaurants;


  constructor(private router: Router, private Services: SmartLunchApiService) {
        this.Services.getRestaurants( ).subscribe(
            data => this.restaurants = data
        );
  }

  ngOnInit() {
  }

}
