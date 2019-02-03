import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant-service/restaurant.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { RestaurantModel } from '../restaurant-model/restaurant.model'
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/';
import { RestaurantEditComponent } from '../restaurant-edit/restaurant-edit.component'
import { RestaurantAddComponent } from '../restaurant-add/restaurant-add.component'
import { RestaurantDeleteComponent } from '../restaurant-delete/restaurant-delete.component'

@Component({
  selector: 'app-restaurant-home',
  templateUrl: './restaurant-home.component.html',
  styleUrls: ['./restaurant-home.component.css', './restaurant-home.component.scss']
})
export class RestaurantHomeComponent implements OnInit {
  public searchBarVisible = true;
  public restaurantsListVisible = false;
  public skipSearchButtonVisible = true;
  public searchRestaurantActive = false;
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
      addSvgIcon('edit', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-edit-24px.svg')).
      addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/round-add-24px.svg')).
      addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search-icon.svg')).
      addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete-icon.svg'))
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
    this.searchBarVisible = false;
    this.restaurantsListVisible = true;
    this.skipSearchButtonVisible = true;
    this.searchRestaurantActive = true;
    this.restaurantService.searchRestaurants(this.searchForm.value.searchString, this.searchForm.value.selectedLocation).subscribe((data: RestaurantModel[]) => {
      this.restaurants = data;
      console.log(this.restaurants)
    });
    console.log("on click search !!!!!!")

  }

  skipSearchRestaurants(): void {
    this.restaurants = null;
    this.restaurantService.getAllRestaurants().subscribe((data: RestaurantModel[]) => {
      this.restaurants = data;
    });
    this.restaurantsListVisible = true;
    this.searchBarVisible = false;
    this.skipSearchButtonVisible = false;
    this.searchRestaurantActive = false;
  }

  showSearchBar(): void {
    this.searchBarVisible = true;
    this.restaurantsListVisible = false;
    this.skipSearchButtonVisible = true;
    this.restaurantService.getRestaurantLocaions().subscribe((data: String[]) => {
      this.locations = data;
    });
  }

  openDialogEditRestaurant(restaurant: RestaurantModel): void {
    let demo: RestaurantModel = Object.create(restaurant);
    const dialogRef = this.dialog.open(RestaurantEditComponent, {
      width: '600px',
      data: { demo },
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshListOfRestaurantsFromBackend();
      console.log('The dialog was closed');
    });
  }

  openDialogAddRestaurant(): void {
    const dialogRef = this.dialog.open(RestaurantAddComponent, {
      width: '600px',
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshListOfRestaurantsFromBackend();
      console.log('The dialog was closed');
    });
  }

  openDialogDeleteRestaurant(restaurant: RestaurantModel): void {

    const dialogRef = this.dialog.open(RestaurantDeleteComponent, {
      width: '600px',
      data: { restaurant },
      hasBackdrop: true,

    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshListOfRestaurantsFromBackend();
      console.log('The dialog was closed');
    });
  }


  refreshListOfRestaurantsFromBackend(): void {
    if (this.searchRestaurantActive) {
      this.restaurantService.searchRestaurants(this.searchForm.value.searchString, this.searchForm.value.selectedLocation).subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
        console.log(this.restaurants)
      });
    } else {
      this.restaurantService.getAllRestaurants().subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
      });
    }
  }
}
