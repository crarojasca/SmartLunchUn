import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  selected: string;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  goToRestaurant() {
    this.router.navigate(['/restaurant', this.selected]);
  }

}
