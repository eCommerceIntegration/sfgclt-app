import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reguser } from '../../regusers/model/reguser.model';

@Injectable({
  providedIn: 'root'
})
export class RegUserService {

  private regusersUrl: string;
 // private reguserUrl: string;

  constructor(private http: HttpClient) {
    this.regusersUrl = 'http://127.0.0.1:8080/regusers';
   }

   public listRegUsers(idUser: String |null): Observable<Reguser[]> {
    const findurl = this.regusersUrl+"/"+idUser;
    return this.http.get<Reguser[]>(findurl+"/list")  ;  }  
 //   return this.http.get<|Reguser[]>(this.regusersUrl+"/list");  }

  public saveRegUser(reguser: Reguser) {
    return this.http.post<Reguser>(this.regusersUrl+"/new", reguser); }

  public findRegUser(idRegUser: String |null) {
    const findurl = this.regusersUrl+"/"+idRegUser;
    return this.http.get<Reguser>(findurl+"/edit")}  
 
  
  public deleRegUser(idUser: String |null): Observable<Reguser> {
    const findurl = this.regusersUrl+"/"+idUser;
    return this.http.get<Reguser>(findurl+"/delete")     
  }  

}
