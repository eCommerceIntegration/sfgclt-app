import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/list', component: UserListComponent }, 
  // { path: '', redirectTo:'/users' , pathMatch: 'full' }, 
  { path: 'users/new', component:  UserFormComponent  }, 
  { path: 'users/:user.id/edit', component: UserFormComponent, pathMatch: 'full' }, 
  { path: 'users/:user.id/delete', component: UserFormComponent, pathMatch: 'full' }, 
 // { path: 'users/:user.id/delete', redirectTo:'/users' , pathMatch: 'full' }, 
  { path: 'adduser', component: UserFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
