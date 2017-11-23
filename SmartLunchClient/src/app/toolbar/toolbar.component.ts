import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartLunchApiService } from '../services/smart-lunch-api.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [ SmartLunchApiService ],
})
export class ToolbarComponent implements OnInit {

  public user;

  constructor(private router: Router, private Services: SmartLunchApiService) {
      this.user = localStorage.getItem('uid');
  }

  ngOnInit() {
  }

  signOut(){
    this.Services.signOut( ).subscribe(
        res => {
          if( res.status == 200 ){
              localStorage.removeItem('user');
              localStorage.removeItem('email');
              this.router.navigate( ["login"] );
          }
        }
    );
  }

}
