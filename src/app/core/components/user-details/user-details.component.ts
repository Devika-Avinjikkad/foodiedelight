import { Component, OnInit } from '@angular/core';
import { userData } from '../../../mocks/user-mock';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  
  adminLoggedInuser=userData[0];

  ngOnInit(): void {
    localStorage.setItem('userRole',this.adminLoggedInuser.role)
  }
  
}
