import { DeliveryComponent } from './delivery/delivery.component';
import { OrdersComponent } from './orders.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports: [
    OrdersRoutingModule,
    SharedModule
  ],
  declarations: [
    OrderItemComponent,
    OrdersComponent,
    DeliveryComponent
  ]
})
export class OrdersModule { }
