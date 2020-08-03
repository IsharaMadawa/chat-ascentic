import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormService } from './form.service';
import { ChatService } from './chat.service';
import { AuthGuardService } from './auth-guard.service';
import { SocketService } from './socket.service';
 
@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [],
    providers: [
        FormService,
        ChatService,
        AuthGuardService,
        SocketService
    ]
})
export class ServicesModule { }