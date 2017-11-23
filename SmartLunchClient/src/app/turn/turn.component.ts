import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartLunchApiService } from '../services/smart-lunch-api.service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css'],
  providers: [ SmartLunchApiService ],
})
export class TurnComponent implements OnInit {

  public turn = {
    restaurant: "",
    number: "",
    user: {
      email: "",
    }
  }

<<<<<<<
  restaurant = localStorage.getItem('restaurant');
  turn = parseInt(localStorage.getItem('turn'), 10) + 1;

  constructor() { }
=======

>>>>>>>


  constructor(private router: Router, private Services: SmartLunchApiService) {
    this.Services.getTurn( ).subscribe(
        data => {this.turn = data[0]; console.log(data)}
    );
  }

  ngOnInit() {
  }

}
