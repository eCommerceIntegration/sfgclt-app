import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:String ='localhost:8080/users';

  constructor(private http: HttpClient) { }

 findAll() { return this.http.get(this.url+'/list') ;  }
/*  findById(private _aLong:String) { return this.http.get(this.url+'/list') ;  }
 save(User object) { return this.http.get(this.url+'/list') ;  }
 delete(User object){ return this.http.get(this.url+'/list') ;  }
 deleteById(Long aLong) { return this.http.get(this.url+'/list') ;  } */

}
