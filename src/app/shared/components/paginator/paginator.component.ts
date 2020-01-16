import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  page:number = 1;
  @Input('totalRecords') totalRecords:number;
  @Input('rows') rows:number;
  
  @Output() paginar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  anterior() {
    if (this.page==1) return;
    this.page--;
    this.paginar.emit(this.page);
  }

  proximo() {
    if (this.page*this.rows == this.totalRecords) return;
    this.page++;
    this.paginar.emit(this.page);
  }

}
