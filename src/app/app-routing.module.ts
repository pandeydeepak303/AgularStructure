import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPopupComponent } from './feature/admin/admin-popup/admin-popup.component';
import { UserComponent } from './feature/user/user/user.component';
import { UserPopupComponent } from './feature/user/user-popup/user-popup.component';
import { HomeComponent } from './feature/home/home.component';
import { AdminComponent } from './feature/admin/admin/admin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'User', component: UserComponent },
  { path: 'AdminPopup', component: AdminPopupComponent},
  { path: 'Homeww', component: HomeComponent },
  { path: 'UserPopup', component:UserPopupComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
