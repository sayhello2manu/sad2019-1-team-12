import { Component, OnInit, Inject } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantModel } from '../restaurant.model'
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/';
import {RestaurantEditComponent} from '../restaurant-edit/restaurant-edit.component'
import {RestaurantAddComponent} from '../restaurant-add/restaurant-add.component'
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private restaurantService: RestaurantService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.
        addSvgIcon('edit',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit-24px.svg')).
        addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/round-add-24px.svg'))
  }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe((data: RestaurantModel[]) => {
      this.restaurants = data;
    });
  }
  
  restaurants: Array<RestaurantModel>;

  openDialogEditRestaurant(restaurant: RestaurantModel): void {
    let demo : RestaurantModel = Object.create(restaurant);
    const dialogRef = this.dialog.open(RestaurantEditComponent, {
      width: '250px',
      data: { demo },
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAddRestaurant(restaurant: RestaurantModel): void {

    const dialogRef = this.dialog.open(RestaurantAddComponent, {
      width: '700px',
      data: { restaurant },
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}




