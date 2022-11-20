import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegUserService } from '../services/reguser-service';
import { Reguser } from '../model/reguser.model';
enum RegAppName   {
  House = 'House',
  Apartment = 'Apartment',
  Flat = 'Flat',
  Studio = 'Studio'
}

@Component({
  selector: 'app-reguser-form',
  templateUrl: './reguser-form.component.html',
  styleUrls: ['./reguser-form.component.css']
})

export class ReguserFormComponent implements OnInit {
  reguser: Reguser ;
  regusers: Reguser[];
  id: String |null  ;
  public eregAppName: RegAppName;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private regUserService: RegUserService
   
  ) {this.reguser = new Reguser(); }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      // swithc si tiene el parametro reguser.id ..lo buscas para mostrar detalles EL registroa
      // swithc si tiene el parametro user.id .. buscas LOS registros

        if (params.has("reguser.id")) {
          this.regUserService.findRegUser(params.get("reguser.id")).subscribe(reguser =>this.reguser = reguser);
        }else{
          this.regUserService.listRegUsers(params.get("user.id")).subscribe(regusers =>this.regusers = regusers);
          this.id = params.get("user.id")
          this.router.navigate(["/regusers",this.id, 'list']);
        }
      })
  
  }
    
 
  onSubmit() {
      this.regUserService.saveRegUser(this.reguser).subscribe(result => this.gotoRegUserList(this.id));  }


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

/*   gotoRegUser(id:String){
         this.regUserService.deleRegUser(id).subscribe(data => {
         });
         this.router.navigate(['/regusers/list']);
     }  */

}


