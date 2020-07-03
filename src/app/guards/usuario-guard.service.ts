import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate{

  constructor(
    private wsService: WebsocketService,
    private router: Router
  ) { }

  canActivate(): boolean {
    const noExisteUsuario = this.wsService.getUsuario() == null;
    if (noExisteUsuario) {
      this.router.navigateByUrl('/');
    }
    return !noExisteUsuario;
  }
}
