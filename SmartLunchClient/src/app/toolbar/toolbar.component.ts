import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user = "Cristian Rojas";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signOut(){
    // this.Services.signOut( ).subscribe(
    //     res => {
    //       if( res.status == 200 ){
              this.router.navigate( [""] );
    //       }
    //     }
    // );
  }

}
