import { Component, OnInit } from '@angular/core';
import { FamiliaService } from '../services/familia.service';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  constructor(private familiaService: FamiliaService) { }

  // remetente;
  // mensagem;

  ngOnInit() {
    // this.familiaService.emitirMensagem.subscribe(res => {

    //   this.remetente = res.remetente;
    //   this.mensagem = res.mensagem;

    // })
  }

  enviarMensagem(){
    this.familiaService.enviarMensagem("Pai", "O Pai enviou uma mensagem");
  }

}
