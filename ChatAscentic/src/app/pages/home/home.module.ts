import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ConversationModule } from "./conversation/conversation.module";
import { ChatListModule } from "./chat-list/chat-list.module";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ConversationModule,
    ChatListModule,
    MatToolbarModule,
  ],
})
export class HomeModule {}
