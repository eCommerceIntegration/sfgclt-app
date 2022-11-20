import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
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
  id: String;


  constructor(private regUserService: RegUserService,   
    private route: ActivatedRoute, 
    private router: Router ) { 
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      if (params.has("user.id")) {
        this.regUserService.listRegUsers(params.get("user.id")).subscribe(users =>this.regusers = users);      
      }
/*       else{
        this.regUserService.deleRegUser(params.get("user.id")).subscribe(user =>this.reguser = user);
      } */
    }) 
  }
    gotoRegUserList() {
/*       this.regUserService.listRegUsers().subscribe(data => {
        this.regusers = data;
      });
      this.router.navigate(['/regusers/list']); */
    }
  
    gotoRegUserAdd(id:String|null){
      this.router.navigate(["/regusers",id, 'new']);
    }
  
    gotoRegUserEdit(id:String){
      this.router.navigate(["/regusers",id, 'edit']);
    }
  
    gotoRegUserDelete(id:String){
        this.regUserService.deleRegUser(id).subscribe(data => {
        });
    }
  }
  