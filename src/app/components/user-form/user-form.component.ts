import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  user: User;
  param:String

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserService) {
        this.user = new User();
  }

  ngOnInit() {

    // this.route.paramMap.subscribe(params =>{
    //   params.get("id")
    //   if (params.has("id")) {
    //     this.userService.findUser(params.get("id")).subscribe(users =>this.user = this.userService.findUser(params.get("id")));
    //   }else{
      this.userService.listUsers().subscribe(users =>this.user = users);
    //   }
    // })

  } 

  onSubmit() {
    this.userService.saveUser(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserEdit(id:String){
    this.router.navigate(['/users/{{id}}/list']);
  }

  gotoUserList() {
    this.router.navigate(['/users/list']);
  }
}
