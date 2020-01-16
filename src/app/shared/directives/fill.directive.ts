import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFill]'
})
export class FillDirective {

  @HostBinding('style.backgroundColor') corDeFundo:string;

  @HostListener('mouseenter') onMouseOver () {
    this.corDeFundo = 'grey';
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.corDeFundo = 'red';
  }

  constructor() { }

  ngOnInit() {
    this.corDeFundo = 'red';
  }

}
