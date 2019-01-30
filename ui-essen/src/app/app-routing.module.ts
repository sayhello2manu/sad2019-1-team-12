import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantHomeComponent } from './restaurant-home/restaurant-home.component';
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
    path: 'restaurant-home',
    component: RestaurantHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


