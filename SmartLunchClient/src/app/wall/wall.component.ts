import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  protected restaurants = [
    {
      "name": "Biología",
      "queue": "31",
      "time": "1:50",
      "img": "biologia"
    },
    {
      "name": "Central",
      "queue": "40",
      "time": "1:30",
      "img": "central"
    },
    {
      "name": "Matemáticas",
      "queue": "45",
      "time": "1:45",
      "img": "mate"
    },
    {
      "name": "Ciencias Humanas",
      "queue": "25",
      "time": "1:15",
      "img": "humanas"
    },
    {
      "name": "Ciencias Económicas",
      "queue": "20",
      "time": "1:20",
      "img": "economia"
    },
    {
      "name": "Agronomía",
      "queue": "33",
      "time": "1:36",
      "img": "agronomia"
    },
    {
      "name": "La Flecha",
      "queue": "15",
      "time": "1:50",
      "img": "flecha"
    },
    {
      "name": "Odontología",
      "queue": "18",
      "time": "2:00",
      "img": "odonto"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
