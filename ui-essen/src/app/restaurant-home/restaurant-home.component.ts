import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css', './restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantService
  ) { }
  locations: Array<String>;
  selectedLocation : String;

  ngOnInit() {
    this.restaurantService.getRestaurantLocaions().subscribe((data: String[]) => {
      this.locations = data;
    });
  }

  onClickSearch() {
    console.log(this.selectedLocation);
  }

}
