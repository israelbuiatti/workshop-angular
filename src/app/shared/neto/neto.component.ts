import { Component, OnInit } from '@angular/core';
import { FamiliaService } from '../services/familia.service';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.css']
})
export class NetoComponent implements OnInit {

  constructor(private familiaService: FamiliaService) { }

  ngOnInit() {
  }

  enviarMensagem(){
    this.familiaService.enviarMensagem("Neto", "O Neto enviou uma mensagem");
  }

}
