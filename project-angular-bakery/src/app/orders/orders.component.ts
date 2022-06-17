import { CartItem } from './../models/cart-item';
import { RadioOption } from './../models/radioOption';
import { Component, OnInit } from '@angular/core';
import { OrderItemService } from './order-item.service';
import { Order, OrderItem } from 'app/models/order';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-orders',
  templateUrl: './orders.component.html',
  
})
export class OrdersComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'Mon'},
    {label: 'Cartão de Débito', value: 'Deb'},
    {label: 'Cartão Refeição', value: 'Ref'},
  ]

  delivery: number = 8;

  constructor(private service: OrderItemService, private route: Router, private serviceHttp: RestaurantService) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.service.ItemsValue()
  }

  cartItems(): CartItem[]{
    return this.service.cartItems()
  }

  increaseQty(item: CartItem){
    this.service.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.service.decreaseQty(item)
  }

  removeQty(item: CartItem){
    this.service.removeQty(item)
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
    .map((item: CartItem)=>new OrderItem(item.quantity, item.menuItem.id))
    this.serviceHttp.checkOrder(order).subscribe(() => {
      this.route.navigate(['/order-summary'])
      this.service.clear()
      
    })
  }

}
