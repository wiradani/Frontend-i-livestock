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
  haha:any;
  DATA_END_POINT = 'http://localhost:8087/api/domba';
  DATA_DELETE = 'http://localhost:8087/api/deleteHewan';



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
  }
  getid(){

  }
    ngOnInit() {

    }
  delete(){
    this.haha.id = this.data.get('id').value;
    console.log('id');
    let tmp =this.haha.id
    this.http.post(this.DATA_DELETE,tmp)
    .subscribe(param =>{
              this.response = param.json();
              console.log(this.response);

              if(this.response.success == true){
                console.log("good job ")
              }

          },
          err =>{
              console.log("errorr")
            //  this.progressService.done();
              console.log(err);
          });
  }

}
