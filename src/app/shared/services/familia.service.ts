import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

    emitirMensagem = new EventEmitter()

    constructor() { }

    enviarMensagem(remetente, mensagem) {
        this.emitirMensagem.emit({"remetente":remetente, "mensagem":mensagem});
    }

}