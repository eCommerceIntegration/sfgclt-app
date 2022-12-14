import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError,map } from 'rxjs/operators';
import { AppTplt } from '../model/apptplate';

/* The @Injectable() decorator defines a class as a service 
in Angular and allows Angular to inject it into a component as a dependency. 
Likewise, the @Injectable() decorator indicates that a component, class, pipe, or NgModule 
has a dependency on a service. 
The injector is the main mechanism. */

@Injectable({
  providedIn: 'root'
/*   The providedIn allow us to specify how Angular should provide the dependency in the service class 
  itself instead of in the Angular Module. 
  It also helps to make the service tree shakable i.e. 
  remove the service from the final bundle if the app does not use it. */
})
export class AppTpltService {
  private apptpltsUrl: string;
  // private apptpltUrl: string;

  constructor(private http: HttpClient) {
  this.apptpltsUrl = 'http://127.0.0.1:8080/apptplts';
   }

/*    public listAppTplts(): Observable<AppTplt[]> {
  return this.http.get<AppTplt[]>(this.apptpltsUrl+"/list");  } */

  public listAppTplts(): Observable<AppTplt[]> {
  return this.http.get<AppTplt[]>(this.apptpltsUrl+"/list").pipe(
    retry(1),
    catchError(this.handleError)  );
  }

  public saveAppTplt(apptplt: AppTplt) {
  return this.http.post<AppTplt>(this.apptpltsUrl+"/new", apptplt);
   }
  /* llamado a direcciones en apptplts-routing
   NOPE! const routes: Routes = [ { path: 'apptplts/new', component:  AppTpltFormComponent  }]; 
   en el servicio se hace la peticion Http: Get o Post*/
   
  public findAppTplt(idAppTplt: String |null) {
  const findurl = this.apptpltsUrl+"/"+idAppTplt;
  return this.http.get<AppTplt>(findurl+"/edit")
  }  

  public deleAppTplt(idAppTplt: String |null): Observable<AppTplt> {
  const findurl = this.apptpltsUrl+"/"+idAppTplt;
  return this.http.get<AppTplt>(findurl+"/delete")     
  }  

  handleError(error:Error) {
  let errorMessage = error;
   if (error instanceof ErrorEvent) {
     // client-side error
     errorMessage = error.error; 
  } else { 
    // server-side error
     errorMessage = error;  }
     window.alert(errorMessage);
  return throwError(errorMessage);

   /* 
   handleError(error:Error) viene de la funcion  catchError(this.handleError) del observable
   activa la funcion error en una constante global error 
   y devuelve este mensaje de error 
   */

  }
}
