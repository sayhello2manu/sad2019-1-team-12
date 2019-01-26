import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantModel } from './restaurant.model'

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  constructor(private http: HttpClient) {
  }

  public HOSTNAME = '//localhost'
  // public HOSTNAME = '//192.168.178.108'

  public PORT = '8080'
  public URL = this.HOSTNAME + ':' + this.PORT + '/restaurant/';

  getAllRestaurants() {
    return this.http.get<Array<RestaurantModel>>(this.URL + 'all');
  }

  getRestaurant(restaurnatId: string) {
    return this.http.get<RestaurantModel>(this.URL + restaurnatId);
  }

  save(restaurant: RestaurantModel): Observable<RestaurantModel> {
    // console.log("calling Save " + restaurant.restaurantId);
    let result: Observable<RestaurantModel>;
    if (restaurant.restaurantId != null) {
      console.log("calling service" + restaurant);
      result = this.http.put<RestaurantModel>(this.URL + 'edit/' + restaurant.restaurantId, restaurant);
    } else {
      result = this.http.post<RestaurantModel>(this.URL + 'create', restaurant);
    }
    return result;
  }

  delete(restaurant: RestaurantModel) {
    return this.http.delete(this.URL + 'delete/' + restaurant.restaurantId);
  }
}

