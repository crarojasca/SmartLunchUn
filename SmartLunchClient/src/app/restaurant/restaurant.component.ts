import { Component, OnInit, Input, } from '@angular/core';
import { Router } from '@angular/router';
import { SmartLunchApiService } from '../services/smart-lunch-api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  providers: [ SmartLunchApiService ]
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant;

  constructor(private router: Router, private Services: SmartLunchApiService, public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  turn(){
    var turn = {restaurant: this.restaurant.name};
    this.Services.postTurn(turn).subscribe(
      res => {this.snackBar.open( 'Turno Generado', 'Close', {duration: 5000});
              this.router.navigate( ["/turn"] );
      },
      error =>{this.snackBar.open( 'No disponible', 'Close', {duration: 5000})}
    )
  }
  getImg() {
    return '/assets/' + this.restaurant.img + '.jpg';
  }

}
