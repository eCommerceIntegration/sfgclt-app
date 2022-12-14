import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from '@app/users/user-list/user-list.component';
import { ReguserListComponent } from '@app/regusers/reguser-list/reguser-list.component';
import { RegpayListComponent } from '@app/regpays/regpay-list/regpay-list.component';
import { RegAppListComponent } from '@app/regapps/regapp-list/regapp-list.component';
import { AppTxtListComponent } from '@app/apptxts/apptxt-list/apptxt-list.component';
import { AppTpltListComponent } from '@app/apptplts/apptplt-list/apptplt-list.component';

const routes: Routes = [
  { path: '', redirectTo:'/home' , pathMatch: 'full' },
  { path: 'home',     component: homeComponent },
  { path: 'link',     component: NavbarComponent },
  { path: 'users',    component: UserListComponent },
  { path: 'reguser',  component: ReguserListComponent },
  { path: 'regpays',  component: RegpayListComponent },
  { path: 'regapps',  component: RegAppListComponent },
  { path: 'apptxts',  component: AppTxtListComponent },
  { path: 'apptplts',  component: AppTpltListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
