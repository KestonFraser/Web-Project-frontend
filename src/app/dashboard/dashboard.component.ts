import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  records=null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    if(this.records === null){
      this.http.get(`${environment.BASE_URL}/api/getGiveaways`).subscribe(data=>{
        this.records = data;//set records to data received 
        console.log(data)
      })
    }
    
  }

}
