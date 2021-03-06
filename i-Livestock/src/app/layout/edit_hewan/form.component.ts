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
          "id": "",
          "nomor_eartag": "" ,
          "spesies_hewan": "",
          "tanggal_lahir": "",
          "berat_badan": "",
          "kesehatan_hewan": ""
    };
    response: any = [];
    loader = false;
    DATA_END_POINT = 'http://localhost:8087/api/updateHewan';

    headers = new Headers({ 'Authorization': localStorage.getItem('userToken') });
    options = new RequestOptions({ headers: this.headers });

    form = new FormGroup({
      nomor_eartag: new FormControl('', Validators.required),
      spesies_hewan: new FormControl('', Validators.required),
      tanggal_lahir: new FormControl('',Validators.required),
      berat_badan: new FormControl('',Validators.required)
      });

      constructor(
        public router: Router,
        public http: Http
      ) {
      }

      ngOnInit() {
          this.data.id = localStorage.getItem('id');
          this.data.nomor_eartag = localStorage.getItem('nomor_eartag');
          this.data.spesies_hewan = localStorage.getItem('spesies');
          this.data.tanggal_lahir = localStorage.getItem('usia');
          this.data.berat_badan = localStorage.getItem('bobot');
          this.router.navigate(['/edit_hewan']);
          //this.data.nomor_eartag = localStorage.getItem();
          console.log(this.data.id);
          console.log(this.data);
      }

    //   get nomorEartag() {
    //       return this.form.get('nomor_eartag');
    //  }
     //
    //  get jenisHewan() {
    //      return this.form.get('jenis_hewan');
    //  }
     //
    //  get spesiesHewan() {
    //      return this.form.get('spesies_hewan');
    //  }
     //
    //  get tanggalLahir() {
    //      return this.form.get('tanggal_lahir');
    //  }
     //
    //  get beratBadan() {
    //      return this.form.get('berat_badan');
    //  }

     editHewan(){
        this.data.nomor_eartag = this.form.get('nomor_eartag').value;
        this.data.spesies_hewan = this.form.get('spesies_hewan').value;
        this.data.tanggal_lahir = this.form.get('tanggal_lahir').value;
        this.data.berat_badan = this.form.get('berat_badan').value;
        //this.data.kesehatan_hewan = this.form.get('kesehatan_hewan').value;

       console.log("masuk")
        this.http.post(this.DATA_END_POINT,this.data)
        .subscribe(param =>{
                  this.response = param.json();
                  console.log(this.response);
                  //loader condition
                  this.loader = true;

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
      reset(){
        this.form.get('nomor_eartag').setValue("");
        this.form.get('jenis_hewan').setValue("");
        this.form.get('spesies_hewan').setValue("");
        this.form.get('tanggal_lahir').setValue("");
        this.form.get('berat_badan').setValue("");

      }



     }
