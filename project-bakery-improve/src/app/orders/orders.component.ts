import { CartItem } from './../models/cart-item';
import { RadioOption } from './../models/radioOption';
import { Component, OnInit } from '@angular/core';
import { OrderItemService } from './order-item.service';
import { Order, OrderItem } from 'app/models/order';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mt-orders',
  templateUrl: './orders.component.html',
  
})
export class OrdersComponent implements OnInit {

  formGroup: FormGroup;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'Mon'},
    {label: 'Cartão de Débito', value: 'Deb'},
    {label: 'Cartão Refeição', value: 'Ref'},
  ]

  delivery: number = 8;

  constructor(private formBuilder: FormBuilder, private service: OrderItemService, private route: Router, private serviceHttp: RestaurantService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      emailConfirmation: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control(''),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control(''),
    })
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
