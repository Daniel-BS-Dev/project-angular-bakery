import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "mt-rating",
  templateUrl: "./rating.component.html",
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter()
  rates: number[] = [1, 2, 3, 4, 5];

  rate: number = 0;

  previousRate: number;

  constructor() {}

  ngOnInit() {}

  setRate(rate: number) {
    this.rate = rate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate(r: number) {
    if (this.previousRate !== undefined) {
     this.rate = this.previousRate;
    }
    this.previousRate = undefined;
  }

}
