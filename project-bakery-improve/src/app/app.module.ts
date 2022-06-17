import { CoreModule } from './core/core.module';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./component/footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantDetailsComponent } from "./restaurants/restaurant-details/restaurant-details.component";
import { MenuComponent } from "./restaurants/restaurant-details/menu/menu.component";
import { ShoppingCartComponent } from "./restaurants/restaurant-details/shopping-cart/shopping-cart.component";
import { MenuItemsComponent } from "./restaurants/restaurant-details/menu-items/menu-items.component";
import { ReviewsComponent } from "./restaurants/restaurant-details/reviews/reviews.component";
import { OrderSummaryComponent } from "./orders/order-summary/order-summary.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemsComponent,
    ReviewsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
