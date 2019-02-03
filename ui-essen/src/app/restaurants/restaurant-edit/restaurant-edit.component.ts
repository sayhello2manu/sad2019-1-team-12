import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { RestaurantService } from '../restaurant-service/restaurant.service';
import { RestaurantModel } from '../restaurant-model/restaurant.model'
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: '../restaurant-edit/restaurant-edit.component.html',
  templateUrl: '../restaurant-edit/restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})

@NgModule({
  exports: [RestaurantEditComponent]
})
export class RestaurantEditComponent {
  countryCode: string = "+49 ";
  constructor(
    public dialogRef: MatDialogRef<RestaurantEditComponent>,
    private restaurantService: RestaurantService,
    private editFormBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  editForm = this.editFormBuilder.group({
    restaurantName: new FormControl('', Validators.required),
    restaurantContactNo: new FormControl('', Validators.pattern('^[0-9]*$')),
    restaurantAddress: new FormControl('', Validators.required),
    restaurantLocation: new FormControl('', Validators.required),
    restaurantCategory: new FormControl('', Validators.required),
    restaurantExpense: new FormControl('', Validators.pattern('^[0-9]*$')),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
  restaurant: RestaurantModel;
  onClickChange(): void {

    this.restaurant = {
      restaurantName: this.editForm.value.restaurantName,
      restaurantAddress: this.editForm.value.restaurantAddress, 
      restaurantContactNo: this.countryCode + this.editForm.value.restaurantContactNo,
      restaurantLocation: this.editForm.value.restaurantLocation,
      restaurantCategory: this.editForm.value.restaurantCategory,
      restaurantExpense: this.editForm.value.restaurantExpense
    }
    console.log(this.restaurant);
    this.restaurantService.save(this.restaurant).subscribe((updatedData: RestaurantModel) => {
      console.log("After Changing Restaurant")
      this.dialogRef.close();
    }
    )
  }

}