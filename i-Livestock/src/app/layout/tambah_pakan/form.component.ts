import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Http} from '@angular/http';
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

   addPakan(nama_pakan,jenis_pakan,jumlah_pakan,kandugan){
     let tmp = jenis_pakan.value;
     this.data.nama_pakan = nama_pakan.value;
     this.data.jumlah_pakan = jumlah_pakan.value;
     this.data.kandungan = kandugan.value;

     if(tmp == 1){
      this.data.jenis_pakan = "Rumput";
     }
     else {
       this.data.jenis_pakan = "Konsentrat";
     }
      this.http.post(this.DATA_END_POINT,this.data)
      .subscribe(param =>{
                this.response = param.json();
                console.log(this.response);
                //loader condition
                this.loader = true;

                if(this.response.success == true){
                  "good job "

                }

            },
            err =>{
                "errorr"
              //  this.progressService.done();
                console.log(err);
            });
    }

   }
