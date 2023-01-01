import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppOpt } from '../../appopts/model/appopt';

@Injectable({
  providedIn: 'root'
})
export class AppOptService {

  private appoptsUrl: string;
  


//https://www.bezkoder.com/angular-spring-boot-file-upload/
 // ULTIMO VIDEO: https://www.youtube.com/watch?v=GKNIzIXrwT8
  constructor(
    private http: HttpClient) {
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


  public saveAppOpt(appopt: AppOpt) {
    return this.http.post<AppOpt>(this.appoptsUrl+"/new", appopt); }

  public deleAppOpt(idAppOpt: String |null){
    const findurl = this.appoptsUrl+"/"+idAppOpt;
    return this.http.get<AppOpt>(findurl+"/delete")         
  }  

  public saveAppOptUser(appopt: AppOpt) {
    return this.http.post<AppOpt>(this.appoptsUrl+"/new", appopt); }

     
   public getImage(url:string){
    return this.http.get(url); // GET  
  }

  public postImage(url:string, body: any){
    return this.http.post(url,body); // POST  
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.appoptsUrl}/new`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.appoptsUrl}/files`);
  }


}
