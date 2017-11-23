import { Component, OnInit, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  turn() {
    localStorage.setItem('restaurant', this.restaurant.name);
    localStorage.setItem('turn', this.restaurant.queue);
    this.router.navigate( ['/turn']);
  }
  getImg() {
    return '/assets/' + this.restaurant.img + '.jpg';
  }

}
