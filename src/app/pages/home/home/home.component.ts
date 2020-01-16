import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valor:number = 1;
  mostrarComponente:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  incValor() {
    this.valor++;
  }


  criarComponente() {
    this.valor = 1;
    this.mostrarComponente = true;
  }

  deletarComponente() {
    this.mostrarComponente = false;
  }


}
