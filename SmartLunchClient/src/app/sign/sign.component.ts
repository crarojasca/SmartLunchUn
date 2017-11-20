import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmartLunchApiService } from '../services/smart-lunch-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { style, state, animate, transition, trigger } from '@angular/core';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css'],
  providers: [ SmartLunchApiService ],
  animations: [
      trigger('fadeInOut', [
          transition(':enter', [
            style({opacity:0}),
            animate(200, style({opacity:1}))
          ]),
          transition(':leave', [
            animate(200, style({opacity:0}))
          ])
      ])
  ]
})
export class SignComponent implements OnInit {

  constructor(private router: Router,  private Services: SmartLunchApiService) { }

  ngOnInit() {
  }

  public invalidCredentials = false;

  protected signInUser = {
    email: '',
    password: ''
  };

  protected signUpUser = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  protected signInForm = new FormGroup({
    email: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(72)]),
  });

  protected signUpForm = new FormGroup({
    rEmail: new FormControl(null,[Validators.required]),
    rPassword: new FormControl(null,[Validators.required,Validators.minLength(8),Validators.maxLength(72)]),
  });


  signIn(email, password){
  this.signInUser.email = email;
  this.signInUser.password = password;

    this.Services.signIn( this.signInUser ).subscribe(
        res => {
          if( res.status == 200 ){
              localStorage.setItem('user', res.json().data["id"]);
              localStorage.setItem('email', email);
              this.router.navigate( [""] );
          }
        },
        err => {
          this.invalidCredentials = true;
        }
    );
  }

  signUp(email, password){
    this.signUpUser.email = email;
    this.signUpUser.password = password;
    this.signUpUser.passwordConfirmation = password;

    this.Services.signUp( this.signUpUser ).subscribe(
        res => {
          if( res.status == 200 ){
              localStorage.setItem('user', res.json().data["id"]);
              localStorage.setItem('email', email);
              this.router.navigate( [""] );
          }
        },
    );
  }

}
