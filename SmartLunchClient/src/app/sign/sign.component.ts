import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signIn(email, password){
  // this.signInUser.email = email;
  // this.signInUser.password = password;
  //
  // this.Services.signIn( this.signInUser ).subscribe(
  //     res => {
  //       if( res.status == 200 ){
            this.router.navigate( ["/home"] );
  //       }
  //     },
  //     err => {
  //       this.invalidCredentials = true;
  //     }
  // );
  }

  signUp(username, email, password){
    // this.signUpUser.username = username;
    // this.signUpUser.email = email;
    // this.signUpUser.password = password;
    // this.signUpUser.passwordConfirmation = password;
    //
    // this.Services.signUp( this.signUpUser ).subscribe(
    //     res => {
    //       console.log(res)
    //       if( res.status == 200 ){
              this.router.navigate( ["/home"] );
    //       }
    //     },
    // );
  }

}
