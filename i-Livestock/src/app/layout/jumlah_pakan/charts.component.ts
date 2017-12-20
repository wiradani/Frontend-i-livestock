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
  rumput:any;
  konsetrat:any;

  DATA_RUMPUT = 'http://localhost:8087/api/rumput';
  DATA_KONSETRAT = 'http://localhost:8087/api/konsentrat';


    // Pie
    public pieChartLabels: string[] = ['Rumput', 'Konsentrat'];
    public pieChartData: number[] =[10,10] ;//ini diganti data
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


      this.http.get(this.DATA_RUMPUT)
      .map(res => res.json())
      .subscribe(data => {
      this.pieChartData[0]=data;
      //this.countall.push(data);
      });

      this.http.get(this.DATA_KONSETRAT)
      .map(res => res.json())
      .subscribe(data => {
      this.pieChartData[1]=data;
      //this.countall.push(data);
      });


    }

    ngOnInit() {

        this.pieChartData.push(this.rumput,this.konsetrat);

    }
}
