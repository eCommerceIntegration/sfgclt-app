import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://127.0.0.1:8080/users';
   }

   public listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/list");  }

  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrl+"/new", user); }

  // public findUser(idUser: String | null) {
  //   return this.http.post<User>(this.usersUrl+"/new", idUser) }

/*   public findUser(idUser: String) {
    return this.http.get<User[]>(this.usersUrl+"/", idUser); }   */

  public findUser(idUser: String |null) {
    const findurl = this.usersUrl+"/"+idUser;
    return this.http.get<User>(findurl+"/edit")}  

/*     public deleUser(idUser: String |null) {
      const findurl = this.usersUrl+"/"+idUser;
      return this.http.get<User>(findurl+"/delete")}   */

/*   public deleUser(idUser: String |null): Observable<User> {
    const findurl = this.usersUrl+"/"+idUser;
    return this.http.get<User>(findurl+"/delete")     
  }  */ 
   
  
  public deleUser(idUser: String |null): Observable<User> {
    const findurl = this.usersUrl+"/"+idUser;
    return this.http.get<User>(findurl+"/delete")     
  }  


/* 
   xeditUser(idUser: String |null): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);  
  }

  obtenerPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURLPosts);
  }
 
  obtenerPostsPorUsuario(id: string): Observable<Post[]> {
    const url = `${this.baseURLPosts}?userId=${id}`;
    return this.http.get<Post[]>(url);
  }
 */

  }
/*  findById(private _aLong:String) { return this.http.get(this.url+'/list') ;  }
 save(User object) { return this.http.get(this.url+'/list') ;  }
 delete(User object){ return this.http.get(this.url+'/list') ;  }
 deleteById(Long aLong) { return this.http.get(this.url+'/list') ;  } */