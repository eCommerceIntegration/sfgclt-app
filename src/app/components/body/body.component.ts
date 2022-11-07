import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  users: any;
  usersArray: any;


  constructor(private _users:UsersService ) { }
  ngOnInit(): void { this.findUsers }

  findUsers(){
    this._users.findAll()
    .subscribe( emisionusers =>{
      this.users= emisionusers;
      // this.usersArray = this.users.users.users;
          
    
    });  }


}
