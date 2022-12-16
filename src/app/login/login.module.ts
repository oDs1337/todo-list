import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginBoxComponent } from './presenters/login-box/login-box.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [
    LoginComponent,
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }
