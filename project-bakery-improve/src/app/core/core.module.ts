import { ShoppingCartService } from './../restaurants/restaurant-details/shopping-cart.service';
import { OrderItemService } from './../orders/order-item.service';
import { NgModule } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';

@NgModule({
  providers:[RestaurantService, OrderItemService, ShoppingCartService]
})
export class CoreModule { }
