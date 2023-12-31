import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dialog: MatDialog){}
  title = 'my-app';
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: "30%"
    });
  }
}
