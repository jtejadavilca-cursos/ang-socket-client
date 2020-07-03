import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cliente-basico';

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.chatService
          .getPrivateMessage()
          .subscribe( msg => {
            console.log('Mensaje privado : ', msg);
          });
  }
}
