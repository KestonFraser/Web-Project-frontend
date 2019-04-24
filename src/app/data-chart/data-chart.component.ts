import { Component,OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {
   locations = null;
   locations_frequency = null;
   highcharts;
   chartOptions;

   constructor(private http:HttpClient) { }


   ngOnInit() {
      this.http.get(`${environment.BASE_URL}/api/getChartData`).subscribe(data=>{
         this.locations = data[0]
         this.locations_frequency = data[1]

         this.highcharts = Highcharts;
         this.chartOptions = {   
            chart: {
               type: 'column'
            },
            title: {
               text: 'Number of Giveaways by Location'
            },
            subtitle : {
               text: 'Source: Twitter.com'  
            },
            xAxis:{
                  categories: this.locations, //['Malaysia', 'maka', 'Arizona, USA', 'Indonesia', 'California, USA', 'Massachusetts', '??roud inc' ,'United States', 'Argentina', 'Oregon, USA', 'Florida', 'British Columbia, Canada', 'Ohio, USA', 'Australia', 'Seattle', '🇵🇭', 'Pekanbaru, Indonesia', 'Oklahoma, USA', 'Davao city', 'uk', 'Delaware', 'Toronto, Ontario', 'New England, USA', 'Toril', 'Dunfermline, Scotland', 'Republic of the Philippines', 'Korea', 'ARMYs Village', 'Philippines', 'ging', 'Nepal', '301👉🏽909', 'New York, NY', 'मणिपुर, भारत Manipur,India']
                  title: {crosshair: true
               } 
            },
            yAxis : {
               min: 0, 
               title: {
                  text: 'Giveaways'
               },
            },
            tooltip : {
               headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
               pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                  '<td style = "padding:0"><b>{point.y}</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
            },
            plotOptions : {
               column: {
                  pointPadding: 0.2,
                  borderWidth: 0
               }
            },
            series: [
               {
                  name: '# of giveaways',
                  data:this.locations_frequency //[2, 7, 4, 19, 4, 2, 2, 5, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 4, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 5, 3, 2, 2, 2]
               }
            ]
         };
      })
   }
}
