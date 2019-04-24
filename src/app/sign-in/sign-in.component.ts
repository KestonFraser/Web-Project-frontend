import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(public dialogRef: MatDialogRef<SignInComponent>, @Inject(MAT_DIALOG_DATA) public data) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
