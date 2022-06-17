import { ErrorHandler } from './../app-error-handler.angular';
import { Restaurants } from "../models/restaurant";
import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "./restaurant.service";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurants = [];
  

  constructor(private service: RestaurantService) {}

  ngOnInit() {
    this.service.restaurants().subscribe(
      (restaurant) => {
        this.restaurants = restaurant
        console.log(this.restaurants.length)
      }
    );
  }
}
