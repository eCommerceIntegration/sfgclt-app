import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reguser } from '../model/reguser.model';
import { RegUserService } from '../services/reguser-service';




@Component({
  selector: 'app-reguser-form',
  templateUrl: './reguser-form.component.html',
  styleUrls: ['./reguser-form.component.css']
})
export class ReguserFormComponent implements OnInit {
  reguser: Reguser ;
  regusers: Reguser[];

  constructor(
      private route: ActivatedRoute, 
      private router: Router, 
      private regUserService: RegUserService
      ) 
  { this.reguser = new Reguser();  }


    ngOnInit() {
      this.route.paramMap.subscribe(params =>{
        if (params.has("reguser.id")) {
          this.regUserService.findRegUser(params.get("reguser.id")).subscribe(reguser =>this.reguser = reguser);
        }else{
          this.regUserService.listRegUsers().subscribe(regusers =>this.regusers = regusers); }
      }) }

  onSubmit() {
    this.regUserService.saveRegUser(this.reguser).subscribe(result => this.gotoRegUserList());  }

  gotoRegUserList() {
    this.regUserService.listRegUsers().subscribe(data => {
      this.regusers = data;
    });
    this.router.navigate(['/regusers/list']);
  }

  gotoRegUserEdit(id:String){
    this.router.navigate(["/regusers",id, 'edit']);
  }

  gotoRegUserDelete(id:String){
      this.regUserService.deleRegUser(id).subscribe(data => {
      });
      this.router.navigate(['/regusers/list']);
  }


  gotoRegUser(id:String){
         this.regUserService.deleRegUser(id).subscribe(data => {
         });
         this.router.navigate(['/regusers/list']);
     } 
      
}
