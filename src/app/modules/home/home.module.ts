import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { RestaurantModule } from '../restaurant/restaurant.module';


@NgModule({
  declarations: [ 
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    RestaurantModule
  ]
})
export class HomeModule { }
