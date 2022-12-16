import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppOpt } from '../../appopts/model/appopt';

@Injectable({
  providedIn: 'root'
})
export class AppOptService {

  private appoptsUrl: string;

  constructor(private http: HttpClient) {
    this.appoptsUrl = 'http://127.0.0.1:8080/appopts';
   }

   public findAppOpt(idAppOpt: String |null) {
    const findurl = this.appoptsUrl+"/"+idAppOpt;
    return this.http.get<AppOpt>(findurl+"/edit")}  

   public findAppOptByIdUser(idAppOpt: String |null) {
    const findurl = this.appoptsUrl+"/"+idAppOpt;
    return this.http.get<AppOpt>(findurl+"/usedit")}  
   
   public listAppOpts(): Observable<AppOpt[]> {
    const findurl = this.appoptsUrl;
    return this.http.get<AppOpt[]>(findurl+"/list")  ;  }  

 
  public listAppOptsAll(): Observable<AppOpt[]> {
    const findurl = this.appoptsUrl;
    return this.http.get<AppOpt[]>(findurl+"/list")  ;  }  


  public saveAppOpt(apptxt: AppOpt) {
    return this.http.post<AppOpt>(this.appoptsUrl+"/new", apptxt); }

  public deleAppOpt(idAppOpt: String |null){
    const findurl = this.appoptsUrl+"/"+idAppOpt;
    return this.http.get<AppOpt>(findurl+"/delete")         
  }  

  public saveAppOptUser(apptxt: AppOpt) {
    return this.http.post<AppOpt>(this.appoptsUrl+"/new", apptxt); }



  public getImage(url:string){
    return this.http.get(url); // GET  
  }

  public postImage(url:string, body: any){
    return this.http.post(url,body); // POST  
  }
}
