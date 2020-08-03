import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSupportModule } from './../../modules/form-support/form-support.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormSupportModule,
    MatTabsModule
  ]
})
export class AuthenticationModule { }
