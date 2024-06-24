import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { RestaurantRoutingModule } from './restaurant-routing.module';

import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [ConfirmationService],
})
export class RestaurantModule { }
