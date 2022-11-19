import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reguser } from '../model/reguser.model';
import { RegUserService } from '../services/reguser-service';

@Component({
  selector: 'app-reguser-list',
  templateUrl: './reguser-list.component.html',
  styleUrls: ['./reguser-list.component.css']
})
export class ReguserListComponent implements OnInit {
  
  regusers: Reguser[];
  reguser: Reguser;

  constructor(private regUserService: RegUserService,   
    private route: ActivatedRoute, 
    private router: Router ) { 
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if (params.has("reguser.id")) {
        this.regUserService.listRegUsers(params.get("user.id")).subscribe(users =>this.regusers = users);      
      }else{
        this.regUserService.deleRegUser(params.get("user.id")).subscribe(user =>this.reguser = user);
      }
    }) 
  }
    gotoRegUserList() {
/*       this.regUserService.listRegUsers().subscribe(data => {
        this.regusers = data;
      });
      this.router.navigate(['/regusers/list']); */
    }
  
    gotoRegUserAdd() {
      this.router.navigate(['/regusers/new']);
    }
  
    gotoRegUserEdit(id:String){
      this.router.navigate(["/regusers",id, 'edit']);
    }
  
    gotoRegUserDelete(id:String){
        this.regUserService.deleRegUser(id).subscribe(data => {
        });
    }
  
  
  }
  