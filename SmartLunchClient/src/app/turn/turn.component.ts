import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {


  restaurant = localStorage.getItem('restaurant');
  turn = parseInt(localStorage.getItem('turn'), 10) + 1;

  constructor() { }

  ngOnInit() {
  }

}
