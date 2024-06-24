import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit():void{
    this.items = [
      { label: 'Restaurants', route: '/restaurants' }
  ];
}
  }


