import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantModel } from '../restaurant.model'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
@NgModule({
  exports: [RestaurantAddComponent]
})
export class RestaurantAddComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<RestaurantAddComponent>,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  onNoClick(): void {
    this.dialogRef.close();
  }
  addedRestaurant: RestaurantModel;
  onClickAdd(restaurant: RestaurantModel): void {
    this.restaurantService.save(restaurant).subscribe((addedData: RestaurantModel) => {
      console.log("After Adding Restaurant")
      console.log(addedData)
      this.dialogRef.close();
    }
    )
  }
  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
