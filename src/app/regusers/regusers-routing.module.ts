import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReguserFormComponent } from '@app/regusers/reguser-form/reguser-form.component';
import { ReguserListComponent } from '@app/regusers/reguser-list/reguser-list.component';


const routes: Routes = [
  { path: 'regusers', component: ReguserListComponent },
  { path: 'regusers/list', component: ReguserListComponent }, 
  { path: 'regusers/:user.id/list', component: ReguserListComponent }, 
  { path: 'regusers/:user.id/new', component: ReguserFormComponent }, 
  { path: 'regusers/new', component:  ReguserFormComponent  }, 
  { path: 'regusers/:reguser.id/edit', component: ReguserFormComponent, pathMatch: 'full' }, 
  { path: 'regusers/:reguser.id/delete', component: ReguserFormComponent, pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegusersRoutingModule { }
