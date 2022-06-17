import { MenuItem } from './../../../models/menu-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-menu-items',
  templateUrl: './menu-items.component.html'
})
export class MenuItemsComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
   this.add.emit(this.menuItem)
  }

}
