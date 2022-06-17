import { ReviewsComponent } from "./restaurants/restaurant-details/reviews/reviews.component";
import { MenuComponent } from "./restaurants/restaurant-details/menu/menu.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantDetailsComponent } from "./restaurants/restaurant-details/restaurant-details.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrderSummaryComponent } from "./orders/order-summary/order-summary.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "about", loadChildren:'./about/about.module#AboutModule'},
  { path: "restaurant", component: RestaurantsComponent },
  {
    path: "restaurant/:id",
    component: RestaurantDetailsComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "menu" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  { path: "order", component: OrdersComponent },
  { path: "order-summary", component: OrderSummaryComponent },
  //{path:'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  //{path:'task', loadChildren: () => import('./task/task.module').then((m) => m.TaskModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
