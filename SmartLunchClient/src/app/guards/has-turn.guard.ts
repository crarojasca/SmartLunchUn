import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { SmartLunchApiService } from '../services/smart-lunch-api.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HasTurnGuard implements CanActivate {

  public turn;

  constructor(private Services: SmartLunchApiService, private router:Router ) {

  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.Services.getTurn( ).toPromise().then(
        (data) => {
          if (data.length > 0){
            resolve(true);
          }else{
            resolve(false);
            this.router.navigate(['/home']);
          }
        })
      })
  }

}
