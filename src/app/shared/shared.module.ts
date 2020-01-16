import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsHtmlComponent } from './components/ws-html/ws-html.component';
import { WsInlineComponent } from './components/ws-inline/ws-inline.component';
import { PersonComponent } from './components/person/person.component';
import { FillDirective } from './directives/fill.directive';
import { CicloComponent } from './ciclo/ciclo.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { NetoComponent } from './neto/neto.component';



@NgModule({
  declarations: [
    WsHtmlComponent,
    WsInlineComponent,
    PersonComponent,
    FillDirective,
    CicloComponent,
    PaginatorComponent,
    PaiComponent,
    FilhoComponent,
    NetoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WsHtmlComponent,
    WsInlineComponent,
    PersonComponent,
    FillDirective,
    CicloComponent,
    PaginatorComponent,
    PaiComponent,
    FilhoComponent,
    NetoComponent,
  ]
})
export class SharedModule { }
