import { MenuItems } from './../models/menu-item';
import { Reviews } from './../models/reviews';
import { ErrorHandler } from '../app-error-handler.angular';
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Restaurants, Restaurant } from "../models/restaurant";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import { Order } from 'app/models/order';

@Injectable()
export class RestaurantService {
  private readonly apiUrl: string = environment.backendUrl;

  constructor(private http: Http) {}

  restaurants(): Observable<Restaurants> {
    return this.http
      .get(`${this.apiUrl}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${this.apiUrl}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  reviewsOfRestaurant(id: string): Observable<Reviews> {
    return this.http
      .get(`${this.apiUrl}/restaurants/${id}/reviews`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  menuOfRestaurant(id: string): Observable<MenuItems> {
    return this.http
      .get(`${this.apiUrl}/restaurants/${id}/menu`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers()
    headers.append('Content-Type', 'aplication/json')
    return this.http
      .post(`${this.apiUrl}/orders`, JSON.stringify(order),
      new RequestOptions({headers}))
      .map((response) => response.json())
      .map(order => order.id)
      .catch(ErrorHandler.handleError);
      
  }

}
