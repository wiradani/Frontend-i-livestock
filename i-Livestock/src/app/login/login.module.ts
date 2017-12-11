import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      LoginRoutingModule,
      HttpModule
    ],
    declarations: [LoginComponent],
    providers: [
        AuthHttp,
        {
          provide: AuthHttp,
          useFactory: getAuthHttp,
          deps: [Http]
        },
        BaseRequestOptions
    ]

})
export class LoginModule {
}
