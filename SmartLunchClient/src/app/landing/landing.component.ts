import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private dialog: MatDialog ) { }

  ngOnInit() {
  }

  openLogin(): void {
    let dialogRef = this.dialog.open(SignComponent, {
      data: { tab: 0}
    });
  }

  openSignUp(): void {
    let dialogRef = this.dialog.open(SignComponent, {
      data: { tab: 1}
    });
  }

}
