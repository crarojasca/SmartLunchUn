import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  protected restaurants = [
    {
      "name": "Concha",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    },
    {
      "name": "Hemeroteca",
      "queue": "40",
      "time": "1:30",
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
