import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  data: any ;
  response: any = [];
  haha:any;
  DATA_END_POINT = 'http://localhost:8087/api/kurbansapi';
  DATA_END_POINT1 = 'http://localhost:8087/api/kurbankambing';
  DATA_END_POINT2 = 'http://localhost:8087/api/kurbandomba';




  constructor(
    public router: Router,
    public http: Http
  ) {
    this.http.get(this.DATA_END_POINT)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        this.haha= data.rows;
        console.log(data.count);
        console.log(this.haha);
    });
    this.http.get(this.DATA_END_POINT1)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        this.haha= data.rows;
        console.log(data.count);
        console.log(this.haha);
    });
    this.http.get(this.DATA_END_POINT2)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        this.haha= data.rows;
        console.log(data.count);
        console.log(this.haha);
    });
  }

    ngOnInit() {

    }


}
