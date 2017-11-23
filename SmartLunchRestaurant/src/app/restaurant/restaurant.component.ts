import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  name: string;
  stName: string;
  color: string;
  turn: number;
  customer: string;
  students = ['Laura', 'Cristian', 'Felipe', 'Sandra', 'Pablo'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      switch (this.name) {
        case 'odontologia': {
           this.stName = 'Cafetería de Odontología';
           break;
        }
        case 'central': {
          this.stName = 'Cafetería Central';
          break;
        }
        case 'matematicas': {
          this.stName = 'Cafetería de Matemáticas';
          break;
        }
        case 'biologia': {
          this.stName = 'Cafetería de Biología';
          break;
        }
        case 'humanas': {
          this.stName = 'Cafetería de Ciencias Humanas';
          break;
        }
        case 'economicas': {
          this.stName = 'Cafetería de Ciencias Económicas';
          break;
        }
        case 'agronomia': {
          this.stName = 'Cafetería de Agronomía';
          break;
        }
        case 'flecha': {
          this.stName = 'Cafetería La Flecha';
          break;
        }
     }
    });

    //conectar turn con base de datos
    this.turn = Math.floor((Math.random() * 500) + 1);

    //conectar customer con base de datos
    this.customer = this.students[Math.floor(Math.random() * 5)];

    this.color = 'accent';
  }

  nextTurn() {
    //conectar turn con base de datos
    this.turn += 1;

    //conectar customer con base de datos
    this.customer = this.students[Math.floor(Math.random() * 5)];

    if (this.color === 'accent') {
      this.color = 'primary';
    } else {
      this.color = 'accent';
    }
  }

}
