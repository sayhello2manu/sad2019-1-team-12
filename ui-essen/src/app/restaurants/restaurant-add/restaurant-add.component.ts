import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { NgModule } from '@angular/core';
import { RestaurantService } from '../restaurant-service/restaurant.service';
import { RestaurantModel } from '../restaurant-model/restaurant.model'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
@NgModule({
  exports: [RestaurantAddComponent]
})

export class RestaurantAddComponent implements OnInit {
  countryCode: string = "+49 ";
  constructor(
    public dialogRef: MatDialogRef<RestaurantAddComponent>,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    iconRegistry.
      addSvgIcon('downward', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/down-arrow final.svg')).
      addSvgIcon('upward', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/up-arrow final.svg'))
  }

  isLinear = false;
  restaurantBasicDetails: FormGroup;
  restaurantLocationDetails: FormGroup;
  restaurantCategoryDetails: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  restaurant: RestaurantModel;


  addRestaurant(): void {
    console.log("Value");
    console.log(this.restaurantBasicDetails.value.restaurantName);
    console.log(this.countryCode + this.restaurantBasicDetails.value.restaurantContactNo)
    console.log(this.restaurantBasicDetails.value.restaurantAddress);
    console.log(this.restaurantLocationDetails.value.restaurantLocation);
    console.log(this.restaurantCategoryDetails.value.restaurantCategory);
    console.log(this.restaurantCategoryDetails.value.restaurantExpense);
    this.restaurant = {
      restaurantName: this.restaurantBasicDetails.value.restaurantName,
      restaurantAddress: this.countryCode + this.restaurantBasicDetails.value.restaurantContactNo,
      restaurantContactNo: this.restaurantBasicDetails.value.restaurantAddress,
      restaurantLocation: this.restaurantLocationDetails.value.restaurantLocation,
      restaurantCategory: this.restaurantCategoryDetails.value.restaurantCategory,
      restaurantExpense: this.restaurantCategoryDetails.value.restaurantExpense
    }
    this.restaurantService.save(this.restaurant).subscribe((addedData: RestaurantModel) => {
      console.log("After Adding Restaurant")
      console.log(addedData)
      this.dialogRef.close();
    })
  }

  ngOnInit() {
    this.restaurantBasicDetails = this.formBuilder.group({
      restaurantName: ['', Validators.required],
      restaurantContactNo: ['', Validators.pattern('^[0-9]*$')],
      restaurantAddress: ['', Validators.required]
    });
    this.restaurantLocationDetails = this.formBuilder.group({
      restaurantLocation: ['', Validators.required]
    });
    this.restaurantCategoryDetails = this.formBuilder.group({
      restaurantCategory: ['', Validators.required],
      restaurantExpense: ['', Validators.pattern('^[0-9]*$')],
    });
  }

}
