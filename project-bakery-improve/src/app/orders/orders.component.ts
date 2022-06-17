import { CartItem } from './../models/cart-item';
import { RadioOption } from './../models/radioOption';
import { Component, OnInit } from '@angular/core';
import { OrderItemService } from './order-item.service';
import { Order, OrderItem } from 'app/models/order';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-orders',
  templateUrl: './orders.component.html',
  
})
export class OrdersComponent implements OnInit {

  emailValidation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberValidation = /^[0-9]*$/
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
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailValidation)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailValidation)]),
      address: this.formBuilder.control('', [Validators.required]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberValidation)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required]),
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
