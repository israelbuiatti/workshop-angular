import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input('firstName') firstName : string;
  @Input('lastName') lastName : string;

  constructor() { }

  ngOnInit() {
  }

}
