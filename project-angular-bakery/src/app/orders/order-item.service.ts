import { Observable } from 'rxjs';
import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurants/restaurant-details/shopping-cart.service';
import { Order } from 'app/models/order';

@Injectable()
export class OrderItemService {

  constructor(private service: ShoppingCartService) { }

  ItemsValue(): number{
    return this.service.total()
  }

  cartItems(): CartItem[]{
    return this.service.items
  }

  increaseQty(item: CartItem){
    this.service.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.service.decreaseQty(item)
  }

  removeQty(item: CartItem){
    this.service.removeItem(item)
  }

  clear(){
    this.service.clear();
  }

}
