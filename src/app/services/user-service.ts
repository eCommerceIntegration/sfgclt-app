import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://127.0.0.1:8080/users';
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+"/list");
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl+"/new", user);
  }
  }
/*  findById(private _aLong:String) { return this.http.get(this.url+'/list') ;  }
 save(User object) { return this.http.get(this.url+'/list') ;  }
 delete(User object){ return this.http.get(this.url+'/list') ;  }
 deleteById(Long aLong) { return this.http.get(this.url+'/list') ;  } */