import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
 };

 /* tipo 1*/
 public barChartLabels = ['2018', '2019', '2020', '2021', '2022'];
 public barChartType = 'bar';
 public barChartLegend = true ;
 public barChartData = [
   {data: [65, 59, 80, 81, 56], label: 'totale'},
   {data: [10, 48, 20, 19, 80], label: 'entrate'},
   {data: [28, 30, 40, 10, 86], label: 'uscite'},
 ];


 /* tipo 2*/
 public radarChartLabels = ['Maggio','Giugno','Luglio','Agosto','Settembre'];
 public radarChartData = [
   {data:[120, 10, 180, 70, 30], label: 'Capitale Totale'},
   {data:[90, 150, 200, 45, 5], label: 'Entrate'},
   {data:[200, 190, 260, 65, 55], label: 'Uscite'},
 ];
 public radarChartType = 'radar';
 

 public pieChartLabels = [ '2018','2019','2020','2021','2022'];
 public pieChartData = {
  labels: ['Puzzano', 'Profumano'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [50, 23],
      backgroundColor: ['rgb(255,99,132)','rgb(100,200,88)']
    }
  ]
};


}
