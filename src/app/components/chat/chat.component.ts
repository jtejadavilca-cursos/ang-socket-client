import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  mensaje = '';
  msgSubscription: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {

    this.msgSubscription = this.chatService
      .getMessage()
      .subscribe( msg => {
        this.agregarMensaje(msg);
      });
  }

  ngOnDestroy(): void {
    this.msgSubscription.unsubscribe();
  }

  enviar(): void {
    if ( this.mensaje.trim().length === 0 ) {
      return;
    }
    console.log('Mensaje : ', this.mensaje);
    this.chatService.sendMessage(this.mensaje.trim());
    this.mensaje = '';
  }

  agregarMensaje( msg: any ): void {
    this.mensajes.push( msg );
    this.elemento = document.getElementById('chat-mensajes');
    setTimeout(() => {
      this.elemento.scrollTop = this.elemento.scrollHeight;
    }, 50);
  }
}
