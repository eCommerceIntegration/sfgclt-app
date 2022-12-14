import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTpltListComponent } from '@app/apptplts/apptplt-list/apptplt-list.component';
import { AppTpltFormComponent } from '@app/apptplts/apptplt-form/apptplt-form.component';

const routes: Routes = [
  { path: 'apptplts', component: AppTpltListComponent },
  { path: 'apptplts/list', component: AppTpltListComponent },  
  { path: 'apptplts/new', component:  AppTpltFormComponent  }, 
  { path: 'apptplts/:apptplt.id/new', component:  AppTpltFormComponent  }, 
  { path: 'apptplts/:apptplt.id/edit', component: AppTpltFormComponent, pathMatch: 'full' }, 
  { path: 'apptplts/:apptplt.id/delete', component: AppTpltFormComponent, pathMatch: 'full' }, 
  { path: 'addapptplt', component: AppTpltFormComponent},
  { path: 'regapptplts/:apptplt.id/list', component: AppTpltListComponent },
  { path: 'regapptplts', component: AppTpltListComponent},
];


//{ path: '', redirectTo:'/apptplts' , pathMatch: 'full' }


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTpltRoutingModule { }
