import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RestaurantModel } from '../restaurant.model'
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/';
import { RestaurantEditComponent } from '../restaurant-edit/restaurant-edit.component'
import { RestaurantAddComponent } from '../restaurant-add/restaurant-add.component'

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css', './restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {
  public showSearchBar = true;
  public searchResultsVisible = false;
  restaurants: Array<RestaurantModel>;
  public locations: Array<String>;

  constructor(
    private searchFormBuilder: FormBuilder,
    public dialog: MatDialog,
    private restaurantService: RestaurantService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.
        addSvgIcon('edit',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-edit-24px.svg')).
        addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/round-add-24px.svg'))
  }

  searchForm = this.searchFormBuilder.group({
    selectedLocation: new FormControl('', Validators.required),
    searchString: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.restaurantService.getRestaurantLocaions().subscribe((data: String[]) => {
      this.locations = data;
    });
  }

  onClickSearch() {
    this.showSearchBar = false;
    this.searchResultsVisible = true; // If 200 Response the true or false 
    this.restaurantService.searchRestaurants(this.searchForm.value.searchString, this.searchForm.value.selectedLocation).subscribe((data: RestaurantModel[]) => {
      this.restaurants = data;
      console.log(this.restaurants)
    });
    console.log("on click search !!!!!!")
    
  }
  
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
      width: '600px',
      data: { restaurant },
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
