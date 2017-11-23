import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subject, Observable } from "rxjs";
import { Angular2TokenService } from "angular2-token";

import 'rxjs/add/operator/map';

@Injectable()
export class SmartLunchApiService {

  protected headers: any;
  protected userData: any;
  public URLPath: string = 'http://localhost:3000';

  constructor( private http: Http, private _tokenService: Angular2TokenService, ) {

    this._tokenService.init({
        apiBase:                    null,
        apiPath:                    'http://localhost:3000',

        signInPath:                 'auth/sign_in',
        signInRedirect:             null,
        signInStoredUrlStorageKey:  null,

        signOutPath:                'auth/sign_out',
        validateTokenPath:          'auth/validate_token',
        signOutFailedValidate:      false,

        registerAccountPath:        'auth',
        deleteAccountPath:          'auth',
        registerAccountCallback:    window.location.href,

        updatePasswordPath:         'auth',
        resetPasswordPath:          'auth/password',
        resetPasswordCallback:      window.location.href,

        oAuthBase:                  window.location.origin,
        oAuthPaths: {
            github:                 'auth/github'
        },
        oAuthCallbackPath:          'oauth_callback',
        oAuthWindowType:            'newWindow',
        oAuthWindowOptions:         null,

        userTypes:                  null,

        globalOptions: {
            headers: {
                'Content-Type':     'application/json; charset=utf-8',
                'Accept':           'application/json'
            }
        }
    });

  }


  getHeaders( ) {
      return this._tokenService.currentAuthHeaders;
  }


  postTurn( turn: { restaurant: string } ) {
    const headers = new Headers( this.getHeaders() );
    headers.set('Content-Type', 'application/json; charset=utf-8' );
    headers.set('Accept',  'application/json' );
    const options = new RequestOptions( { headers } );

    return this.http.post( this.URLPath + '/turns', JSON.stringify(turn), options )
          .map( ( res: Response ) => res.json( ) );
  }

  getTurn() {
    const headers = new Headers( this.getHeaders() );
    headers.set('Content-Type', 'application/json; charset=utf-8' );
    headers.set('Accept',  'application/json' );
    const options = new RequestOptions( { headers } );
    return this.http.get( this.URLPath + '/turns', options ).map( ( res: Response ) => res.json());
  }

  getRestaurants() {
    return this.http.get( this.URLPath + '/restaurants' ).map( ( res: Response ) => res.json());
  }

  signIn( signInData: { email: string, password: string }  ): Observable<Response> {
    return this._tokenService.signIn( signInData ).map(
        res => {
          this.headers = this.getHeaders();
          return res;
        }
    );
  }

  signUp( signUpData: { email: string, password: string, passwordConfirmation: string } ): Observable<Response> {
    return this._tokenService.registerAccount( signUpData ).map(
        res => {
          var signInData = { email: signUpData.email, password: signUpData.password};
          this.signIn(signInData);
          return res;
        }
    );
  }

  signOut( ): Observable<Response> {
    return this._tokenService.signOut().map(
      res =>      {return res},
      error =>    {return error}
    );

  }


  // newBet ( betData: { num: string } ){
  //   const headers = new Headers( this.getHeaders() );
  //   headers.set('Content-Type', 'application/json; charset=utf-8' );
  //   headers.set('Accept',  'application/json' );
  //   const options = new RequestOptions( { headers } );
  //
  //   return this.http.post( this.URLPath + '/new_bet/', JSON.stringify(betData), options )
  //         .map( ( res: Response ) => res.json( ) );
  // }


}
