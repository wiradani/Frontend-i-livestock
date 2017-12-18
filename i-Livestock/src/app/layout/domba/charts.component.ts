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
  Data_ID:any=[];


  constructor(
    public router: Router,
    public http: Http
  ) {
    this.http.get(this.DATA_END_POINT)
    .map(res => res.json())
    .subscribe(data => {
        this.data = data;
        this.haha= data.rows;
        this.Data_ID=data.rows.id;
        console.log(data.count);
        console.log(this.haha);
    });
  }

    ngOnInit() {

    }
  delete(id){
    console.log(id);
    this.http.post(this.DATA_DELETE,{id: id})
    .subscribe(param =>{
              this.response = param.json();
              console.log(this.response);
              console.log(id)
              location.reload();
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
  edit(){
    this.router.navigate(['/edit_hewan']);
  }

}
