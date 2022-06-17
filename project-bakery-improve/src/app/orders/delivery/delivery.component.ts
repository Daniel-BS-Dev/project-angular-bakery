import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delivery',
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent implements OnInit {

  @Input() delivery: number
  @Input() itemsValue: number

  constructor() { }

  ngOnInit() {
  }

  totalValue(): number{
    return this.itemsValue + this.delivery
  }

}
