import { RestaurantService } from './restaurants/restaurant.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./component/footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurants/restaurant-details/restaurant-details.component';
import { MenuComponent } from './restaurants/restaurant-details/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant-details/shopping-cart/shopping-cart.component';
import { MenuItemsComponent } from './restaurants/restaurant-details/menu-items/menu-items.component';
import { ReviewsComponent } from './restaurants/restaurant-details/reviews/reviews.component';
import { ShoppingCartService } from './restaurants/restaurant-details/shopping-cart.service';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemComponent } from './orders/order-item/order-item.component';
import { OrderItemService } from './orders/order-item.service';
import { DeliveryComponent } from './orders/delivery/delivery.component';
import { OrderSummaryComponent } from './orders/order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    ReviewsComponent,
    OrdersComponent,
    InputComponent,
    RadioComponent,
    OrderItemComponent,
    DeliveryComponent,
    OrderSummaryComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule],
  providers: [RestaurantService, OrderItemService ,ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
