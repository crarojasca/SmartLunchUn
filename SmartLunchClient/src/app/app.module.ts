import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SignComponent } from './sign/sign.component';
import { BannerComponent } from './banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import 'hammerjs';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { WallComponent } from './wall/wall.component';
import { TurnComponent } from './turn/turn.component';

import { AuthenticationService } from './guards/authentication.service';
import { HasTurnGuard } from './guards/has-turn.guard';

import { SmartLunchApiService } from './services/smart-lunch-api.service';

export const appRoutes: Routes = [
  { path: 'login',
    component: LandingComponent,
  },
  { path: '',
    component: HomeComponent,
    canActivate: [AuthenticationService],
    children: [
      {
        path: '',
        component: TurnComponent,
        canActivate: [AuthenticationService, HasTurnGuard],
      },
      {
        path: 'home',
        component: WallComponent,
      }
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SignComponent,
    BannerComponent,
    LandingComponent,
    HomeComponent,
    RestaurantComponent,
    WallComponent,
    TurnComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatSnackBarModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot( appRoutes ),
  ],
  exports: [
  ],
  providers: [SmartLunchApiService, Angular2TokenService, AuthenticationService, HasTurnGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
