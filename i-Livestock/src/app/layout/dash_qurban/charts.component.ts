import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
  data: any ;
  response: any = [];
  countall:any=[];
  sapi:number;
  kambing:any;
  domba:number;

  DATA_KAMBING = 'http://localhost:8087/api/countkambing';
  DATA_SAPI = 'http://localhost:8087/api/countsapi';
  DATA_DOMBA = 'http://localhost:8087/api/countdomba';

    // Pie
    public pieChartLabels: string[] = ['Sapi', 'Kambing', 'Domba'];
    public pieChartData: number[] =[10,10,10] ;//ini diganti data
    public pieChartType: string = 'pie';


    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

     // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sapi' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Kambing' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Domba' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];


    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
    }

    constructor(
      public router: Router,
      public http: Http,
    ) {


      this.http.get(this.DATA_KAMBING)
      .map(res => res.json())
      .subscribe(data => {
      this.pieChartData[1]=data;
      //this.countall.push(data);
      });

      this.http.get(this.DATA_DOMBA)
      .map(res => res.json())
      .subscribe(data => {
      this.pieChartData[2]=data;
      //this.countall.push(data);
      });

      this.http.get(this.DATA_SAPI)
      .map(res => res.json())
      .subscribe(data => {
      this.pieChartData[0]=data;
      //this.countall.push(data);
      });

    }

    ngOnInit() {

        this.pieChartData.push(this.kambing,this.sapi,this.domba);

    }
}
