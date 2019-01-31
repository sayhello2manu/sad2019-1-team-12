import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { RestaurantService } from '../restaurant-service/restaurant.service';
import { RestaurantModel } from '../restaurant-model/restaurant.model'

@Component({
  selector: '../restaurant-edit/restaurant-edit.component.html',
  templateUrl: '../restaurant-edit/restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})

@NgModule({
  exports: [RestaurantEditComponent]
})
export class RestaurantEditComponent {

  constructor(
    public dialogRef: MatDialogRef<RestaurantEditComponent>,
    private restaurantService: RestaurantService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  updatedRestaurant: RestaurantModel;
  onClickChange(restaurant: RestaurantModel): void {
    this.restaurantService.save(restaurant).subscribe((updatedData: RestaurantModel) => {
      console.log("After Changing Restaurant")
      console.log(updatedData)
      this.dialogRef.close();
    }
    )
  }

}