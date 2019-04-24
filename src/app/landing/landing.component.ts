import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  title = 'frontend';
  currId= 1;
  username="";
  password="";
  public token:any=null;
  loggedIn=false;

  constructor(private router: Router,  public dialog1: MatDialog, public dialog2: MatDialog, private http:HttpClient) {}

  public getToken(){
    return this.token;
  }

  openDialog(): void {
    const dialogRef = this.dialog1.open(SignInComponent, {
      width: '250px',
      data: {username: "", password: ""}
    });//opens a SignInComponent dialog and passes data to it

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed', data);
      localStorage.setItem('user', JSON.stringify(data));
       this.http.post(`${environment.BASE_URL}/auth`, data, {headers:{'Content-Type': 'application/json'}}).subscribe(response=>{
            // this.token = response.access_token; //got token from successful login
            this.loggedIn = true;
            console.log("logged in with token", response);
            this.router.navigate(['dashboard']);//redirects page
          })
    });
  }

  openSignUpDialog(): void {
    const dialogRef = this.dialog2.open(SignUpComponent, {
      width: '250px',
      data: {username: "", password: "", password2: ""}
    });//opens a SignUpComponent dialog and passes data to it

    dialogRef.afterClosed().subscribe(data => {
      console.log('The dialog was closed', data);
      this.http.post(`${environment.BASE_URL}/api/createUser`, data, {headers:{'Content-Type': 'application/json'}}).subscribe(response=>{
        console.log("logged in with token", response);
        window.alert("user created, you may now log in");
        this.router.navigate(['landing']);//redirects page
      })
    });
  }

}
