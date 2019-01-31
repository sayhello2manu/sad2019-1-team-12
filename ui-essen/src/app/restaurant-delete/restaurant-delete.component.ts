import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantModel } from '../restaurant.model'

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})

@NgModule({
  exports: [RestaurantDeleteComponent]
})

export class RestaurantDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<RestaurantDeleteComponent>,
    private restaurantService: RestaurantService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }
  onClickDelete(restaurantId: number): void {
    this.restaurantService.delete(restaurantId).subscribe((deletedData: RestaurantModel) => {
      console.log("After Deleting Restaurant")
      this.dialogRef.close();
    }
    )
  }

}