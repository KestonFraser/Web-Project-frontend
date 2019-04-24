import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  record=null;
  user=null;

  constructor(private http:HttpClient) { } // public app:LandingComponent, 

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.http.get(`${environment.BASE_URL}/api/userDetails/${this.user.username}`).subscribe(data=>{
        this.record = data;//set records to data received 
      })
    }
  }
}
