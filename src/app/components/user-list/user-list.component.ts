import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;

  constructor(private userService: UserService,   
    private route: ActivatedRoute, 
    private router: Router ) { 
   }

  ngOnInit() {
  //this.userService.listUsers().subscribe(users =>this.users = users);
 
  this.route.paramMap.subscribe(params =>{
    if (params.has("user.id")) {
      this.userService.deleUser(params.get("user.id")).subscribe(user =>this.user = user);
    }else{
      this.userService.listUsers().subscribe(users =>this.users = users);
    }
  }) 
}
  gotoUserList() {
    this.userService.listUsers().subscribe(data => {
      this.users = data;
    });
    this.router.navigate(['/users/list']);
  }

  gotoUserAdd() {
    this.router.navigate(['/users/new']);
  }

  gotoUserEdit(id:String){
    this.router.navigate(["/users",id, 'edit']);
  }

/*   gotoUserDelete(id:String){
    this.router.navigate(["/users",id,'delete']);
  } */

  gotoUserDelete(id:String){
    this.userService.deleUser(id).then (() => this.router.navigate(['/users/list']));

  }


}
