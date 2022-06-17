import { Restaurant } from "../../models/restaurant";
import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "../restaurant.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-restaurant-details",
  templateUrl: "./restaurant-details.component.html",
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private service: RestaurantService,private route: ActivatedRoute) {}

  ngOnInit() {
    let id: string = this.route.snapshot.params['id']
    this.service
      .restaurantById(id)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
