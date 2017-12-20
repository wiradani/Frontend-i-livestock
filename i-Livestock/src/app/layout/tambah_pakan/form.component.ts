import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
  data = {
      "jenis_pakan":    "",
      "nama_pakan":    "",
      "jumlah_pakan":   "",
      "kandungan":   ""
  };
  response: any = [];
  loader = false;
  DATA_END_POINT = 'http://localhost:8087/api/createPakan';

  headers = new Headers({ 'Authorization': localStorage.getItem('userToken') });
  options = new RequestOptions({ headers: this.headers });

  form = new FormGroup({
    jenis_pakan: new FormControl('', Validators.required),
    nama_pakan: new FormControl('', Validators.required),
    jumlah_pakan: new FormControl('', Validators.required),
    kandungan: new FormControl('',Validators.required)
    });

    constructor(
      public router: Router,
      public http: Http
    ) {
    }

    ngOnInit() {

    }

    get jenisPakan() {
        return this.form.get('jenis_pakan');
   }

   get namaPakan() {
       return this.form.get('nama_pakan');
   }

   get jumlahPakan() {
       return this.form.get('jumlah_pakan');
   }

   get kandungan() {
       return this.form.get('kandungan');
   }

   addPakan(){
      this.data.jenis_pakan = this.form.get('jenis_pakan').value;
      this.data.nama_pakan = this.form.get('nama_pakan').value;
      this.data.jumlah_pakan = this.form.get('jumlah_pakan').value;
      this.data.kandungan = this.form.get('kandungan').value;

     console.log(this.data.jumlah_pakan);
     console.log(this.data.kandungan);

     console.log("masuk")
      this.http.post(this.DATA_END_POINT,this.data)
      .subscribe(param =>{
                this.response = param.json();
                console.log(this.response);
                //loader condition
                this.loader = true;

                if(this.response.success == true){
                  console.log("good job ")
                    location.reload();
                }

            },
            err =>{
                console.log("errorr")
              //  this.progressService.done();
                console.log(err);
            });
    }
    reset(){
      this.form.get('jenis_pakan').setValue("");
      this.form.get('nama_pakan').setValue("");
      this.form.get('jumlah_pakan').setValue("");
      this.form.get('kandungan').setValue("");

    }

   }
