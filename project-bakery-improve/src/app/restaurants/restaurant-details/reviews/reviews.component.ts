import { Reviews } from "./../../../models/reviews";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { RestaurantService } from "app/restaurants/restaurant.service";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<Reviews>;

  constructor(
    private service: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id: string = this.route.parent.snapshot.params["id"];
    this.reviews = this.service.reviewsOfRestaurant(id);
  }
}
