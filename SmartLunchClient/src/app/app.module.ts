import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

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

export const appRoutes: Routes = [
  { path: '',
    component: LandingComponent,
  },
  { path: 'home',
    component: HomeComponent,
    // canActivate: [Angular2TokenService]
    children: [
      {
        path: '',
        component: WallComponent,
      },
      {
        path: 'turn',
        component: TurnComponent,
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
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
