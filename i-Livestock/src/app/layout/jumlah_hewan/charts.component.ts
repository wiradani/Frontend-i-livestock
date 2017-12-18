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
    public pieChartData: number[] =[1,5,10] ;//ini diganti data
    public pieChartType: string = 'pie';


    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

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

        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(
      public router: Router,
      public http: Http,
    ) {


      this.http.get(this.DATA_KAMBING)
      .map(res => res.json())
      .subscribe(data => {
      //this.kambing=data;
      this.countall.push(data);
      });
      this.http.get(this.DATA_SAPI)
      .map(res => res.json())
      .subscribe(data1 => {
        this.countall.push(data1);
      });
      this.http.get(this.DATA_DOMBA)
      .map(res => res.json())
      .subscribe(data2 => {
        this.countall.push(data2);
      });

      var pieChartData = this.countall;

    }

    ngOnInit() {

        this.pieChartData.push(this.kambing,this.sapi,this.domba);

    }
}
