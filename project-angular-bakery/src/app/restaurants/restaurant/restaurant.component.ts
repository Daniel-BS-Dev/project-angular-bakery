import { Restaurant } from '../../models/restaurant';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  
})
export class RestaurantComponent implements OnInit {

@Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
