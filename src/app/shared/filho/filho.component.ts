import { Component, OnInit } from '@angular/core';
import { FamiliaService } from '../services/familia.service';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {

  constructor(private familiaService: FamiliaService) { }

  ngOnInit() {
    
  }

  enviarMensagem(){
    this.familiaService.enviarMensagem("Filho", "O Filho enviou uma mensagem");
  }

}
