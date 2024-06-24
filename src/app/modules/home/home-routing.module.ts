import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { AdminGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
    {path:'',
        component:HomeComponent,
        children: [
          { path: 'restaurants', 
            loadChildren:() => import('../restaurant/restaurant.module').then(module => module.RestaurantModule),
            canActivate: [AdminGuard]
           }
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }