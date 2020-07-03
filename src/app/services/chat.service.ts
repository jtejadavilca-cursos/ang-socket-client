import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public socketStatus = false;
  constructor(
    public wsService: WebsocketService
  ) { }

  sendMessage( mensaje: string ): void {
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje', payload);
  }

  getMessage(): Observable<any> {
    return this.wsService.listen('mensaje-nuevo');
  }

  getPrivateMessage(): Observable<any> {
    return this.wsService.listen('mensaje-privado');
  }
}
