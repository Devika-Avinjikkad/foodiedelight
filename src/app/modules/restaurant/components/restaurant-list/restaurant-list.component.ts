import { Component, OnInit } from '@angular/core';
import { RestaurantServiceService } from '../../service/restaurant-service.service';
import { restaurant } from '../../model/restaurant-model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.scss'
})
export class RestaurantListComponent implements OnInit {
  restaurant:restaurant[]=[]
  displayDialog: boolean = false;
  newRestaurant: restaurant={
    name: '',
    description: '',
    location: '',
    cuisine: '',
    rating: 0,
    id: 0
  } ;
  selectedRestaurant: restaurant | null = null;
  isNewRestaurant: boolean = true;
  popupLabel:string=''

  constructor(private restaurantServiceService:RestaurantServiceService, private confirmationService: ConfirmationService){

  }
  ngOnInit(): void {
    this.getRestaurantData()
  }
  showDialog(isNew: boolean) {
    this.isNewRestaurant = isNew;
    this.displayDialog = true;
    this.popupLabel=isNew?'Add Restaurant':'Edit Restuarant'
  }

  getRestaurantData(){
    this.restaurant=this.restaurantServiceService.getRestaurants()
  }

  hideDialog() {
    this.displayDialog = false;
    this.newRestaurant = { name: '',
      description: '',
      location: '',
      cuisine: '',
      rating: 0,
      id: 0 };
    this.selectedRestaurant = null;
  }

  confirmDelete(restaurant: restaurant) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this restaurant?',
      accept: () => {
        this.deleteRestaurant(restaurant);
      }
    });
  }

  saveRestaurant() {
    if (this.isNewRestaurant) {
      this.newRestaurant.id = this.generateId();
      this.restaurantServiceService.saveRestaurants(this.newRestaurant)
      this.getRestaurantData();
    } else {
      const index = this.restaurant.findIndex(r => r === this.selectedRestaurant);
      this.restaurantServiceService.putRestaurants(this.newRestaurant,index)
      this.getRestaurantData();
    }
    this.displayDialog = false;
    this.newRestaurant = { name: '',
      description: '',
      location: '',
      cuisine: '',
      rating: 0,
      id: 0 };
    this.selectedRestaurant = null;
  }

  editRestaurant(restaurant: restaurant) {
    this.selectedRestaurant = restaurant;
    this.newRestaurant = { ...restaurant };
    this.showDialog(false);
  }

  deleteRestaurant(restaurant: restaurant) {
    this.restaurantServiceService.deleteRestaurant(restaurant);
    this.getRestaurantData();
  }

  private generateId(): number {
    return this.restaurant.length > 0 ? Math.max(...this.restaurant.map(r => r.id!)) + 1 : 1;
  }
}
