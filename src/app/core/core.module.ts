import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[HeaderComponent]
})
export class CoreModule { }
