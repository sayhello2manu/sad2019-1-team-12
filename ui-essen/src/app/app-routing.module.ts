import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full'
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'restaurant/edit/:restaurantId',
    component: RestaurantEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


