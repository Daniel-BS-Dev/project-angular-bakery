import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'app/models/cart-item';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

  @Input() orderItems: CartItem[]

  @Output() increaseQty = new EventEmitter<CartItem>()
  @Output() decreaseQty = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
   this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item)
  }

  emitRemoveQty(item: CartItem){
    this.remove.emit(item)
  }

}
