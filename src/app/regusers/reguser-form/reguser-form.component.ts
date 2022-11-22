import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegUserService } from '../services/reguser-service';
import { Reguser } from '../model/reguser.model';
import { AppName } from '@app/enums/app-name';

@Component({
  selector: 'app-reguser-form',
  templateUrl: './reguser-form.component.html',
  styleUrls: ['./reguser-form.component.css']
})

export class ReguserFormComponent implements OnInit {
  reguser: Reguser ;
  regusers: Reguser[];
  id: String |null  ;
  appNames: Array<string> = Object.keys(AppName).filter(key => isNaN(+key));
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private regUserService: RegUserService  
  ) {this.reguser = new Reguser(); } 
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
        if (params.has("reguser.id")) {
          this.regUserService.findRegUser(params.get("reguser.id")).subscribe(reguser =>this.reguser = reguser);
        }
      }) 
  }
  onSubmit() {
      this.regUserService.saveRegUser(this.reguser).subscribe(result => this.gotoRegUserList(this.reguser.idUser)); 
  }
  gotoRegUserSave(id:String){
        this.regUserService.saveRegUser(this.reguser).subscribe(data => {
        });
        this.router.navigate(['/regusers/list']);
  }
  gotoRegUserList(id:String|null) {
    this.regUserService.listRegUsers(id).subscribe(data => {
      this.regusers = data;
    });
    this.router.navigate(["/regusers",id, 'list']);
  }
  gotoRegUserEdit(id:String){
    this.router.navigate(["/regusers",id, 'edit']);
  }
  gotoRegUserDelete(id:String){
      this.regUserService.deleRegUser(id).subscribe(data => {
      });
      this.router.navigate(['/regusers/list']);
  }
}


