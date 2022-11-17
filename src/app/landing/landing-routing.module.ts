import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '@app/users/user-list/user-list.component';
import { homeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch: 'full' },
  { path: 'home', component: homeComponent },
  { path: 'link', component: NavbarComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
