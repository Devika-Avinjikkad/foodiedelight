import { Injectable } from '@angular/core';
import { MockRestaurants } from '../../../mocks/restaurant-mock';
import { restaurant } from '../model/restaurant-model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  restaurantList = MockRestaurants

  constructor() { }

  getRestaurants() {
    return this.restaurantList;
  }

  saveRestaurants(restaurant: restaurant) {
    this.restaurantList = [...this.restaurantList, restaurant]
  }

  putRestaurants(restaurant: restaurant, index: number) {
    this.restaurantList[index] = { ...restaurant };
  }

  deleteRestaurant(restaurant: restaurant) {
    this.restaurantList = this.restaurantList.filter(r => r !== restaurant);
  }
}
