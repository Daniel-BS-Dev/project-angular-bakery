import { MenuItem } from './../../../models/menu-item';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'app/models/menu-item';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItems>

  constructor(private service: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id']
    this.menu = this.service.menuOfRestaurant(id)
  }

  addItem(item: any){
    console.log(item)
  }

}
