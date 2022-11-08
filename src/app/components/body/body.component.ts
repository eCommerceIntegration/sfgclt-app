import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/user-service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  users: any;
  usersArray: any;
  title: any;


  constructor(private _users:UserService ) { }
  ngOnInit(): void { this.findUsers() }

  findUsers(){
    this._users.findAll()
    .subscribe( emisionusers =>{
      this.users= emisionusers;
      // this.usersArray = this.users.users.users;
      console.log("console.log"); 
     console.log(this.users);   
    
    });  }


}
