import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormSupportModule } from "./../../modules/form-support/form-support.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormSupportModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class AuthenticationModule {}
