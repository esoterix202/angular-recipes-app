import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() templateSelected= new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(template: string) {
    this.templateSelected.emit(template);
  }
}
