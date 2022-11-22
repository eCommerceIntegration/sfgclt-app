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
        this.regUserService.listRegUsers(params.get("user.id")).subscribe(regusers =>this.regusers = regusers);
        this.id == params.get("user.id");    
      }

    }) 
  }
    gotoRegUserList() {
      this.router.navigate(["/regusers",this.id, 'list']);
    }
  
    gotoRegUserSave(){
      this.regUserService.saveRegUser(this.reguser).subscribe(reguser =>this.reguser = reguser);
      this.router.navigate(["/regusers",this.id, 'list']);
    }
  
    gotoRegUserEdit(id:String){
      this.router.navigate(["/regusers",id, 'edit']);
      
    }
  
    gotoRegUserDelete(id:String,idUser:String){
/*         this.regUserService.deleRegUser(id).subscribe(data => {
        }); */
        this.regUserService.deleRegUser(id).subscribe(reguser =>this.reguser = reguser);
        this.router.navigate(["/regusers",idUser, 'list']);
      }


    gotoRegUserNew(id:String){
      this.router.navigate(["/regusers",1, 'new']);
  }
}
  