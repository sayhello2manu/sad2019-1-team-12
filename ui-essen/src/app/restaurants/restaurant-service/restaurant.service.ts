import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantModel } from '../restaurant-model/restaurant.model'

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  constructor(private http: HttpClient) {
  }

  public HOSTNAME = '//localhost'
  // public HOSTNAME = '//192.168.0.178'

  public PORT = '8080'
  public URL = this.HOSTNAME + ':' + this.PORT + '/restaurants/';

  getAllRestaurants() {
    return this.http.get<Array<RestaurantModel>>(this.URL);
  }

  getRestaurant(restaurnatId: string) {
    return this.http.get<RestaurantModel>(this.URL + restaurnatId);
  }

  save(restaurant: RestaurantModel): Observable<RestaurantModel> {
    let result: Observable<RestaurantModel>;
    if (restaurant.restaurantId != null) {
      console.log("calling service" + restaurant);
      result = this.http.put<RestaurantModel>(this.URL + restaurant.restaurantId, restaurant);
    } else {
      result = this.http.post<RestaurantModel>(this.URL, restaurant);
    }
    return result;
  }

  delete(restaurantId: number) {
    return this.http.delete(this.URL + restaurantId);
  }

  getRestaurantLocaions(): Observable<Array<String>> {
    return this.http.get<Array<String>>(this.URL + 'locations');
  }

  searchRestaurants(searchStringFromUI: string, locationFromUI: string): Observable<Array<RestaurantModel>> {
    return this.http.get<Array<RestaurantModel>>(this.URL, {
      params: {
        searchString: searchStringFromUI,
        location: locationFromUI
      }
    });
  }


}

