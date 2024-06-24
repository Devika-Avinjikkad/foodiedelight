import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAdmin(): boolean {
    const userRole = localStorage.getItem('userRole');
    return userRole === 'admin';
  }

}
