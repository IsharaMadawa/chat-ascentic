import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { ConversationModule } from "./conversation/conversation.module";
import { ChatListModule } from "./chat-list/chat-list.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ConversationModule,
    ChatListModule,
  ]
})
export class HomeModule {}
