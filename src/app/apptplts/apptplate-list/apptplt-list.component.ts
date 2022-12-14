import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppTplt } from '../model/apptplate';
import { AppTpltService } from '../services/apptplate.service';

@Component({
  selector: 'app-apptplt-list',
  templateUrl: './apptplt-list.component.html',
  styleUrls: ['./apptplt-list.component.css']
})
export class AppTpltListComponent implements OnInit {
  apptplts: AppTplt[];
  apptplt: AppTplt;
  errorMessage = "";
  repos: AppTplt[];
  repo:AppTplt;
 
  constructor(private appTpltService: AppTpltService,   
    private route: ActivatedRoute, 
    private router: Router ) { 
   }
ngOnInit() {

  this.route.paramMap.subscribe(params =>{
    if (params.has("apptplt.id")) {
      this.appTpltService.findAppTplt(params.get("apptplt.id"))
      .subscribe(
        (response) => { this.apptplt = response;
        },
        (error) => {   this.errorMessage = error;

        }
      )

   //   this.router.navigate(["/apptplts",this.apptplt.id, 'edit']);
    }else{ 
      this.appTpltService.listAppTplts()
      .subscribe(
        (response) => {  this.apptplts = response;
        },
        (error) => {     this.errorMessage = error;
        }
      )
     }
  }
  )
} 

  gotoAppTpltList() {
    this.appTpltService.listAppTplts()
    .subscribe(
      (response) => {     },
      (error) => {   this.errorMessage = error;  
      }
    );
    this.router.navigate(['/apptplts/list']);
  }

  gotoAppTpltAdd() {
    this.router.navigate(['/apptplts/new']);
  }

  gotoAppTpltEdit(id:String){
    this.router.navigate(["/apptplts",id, 'edit']);
  }

  gotoAppTpltDelete(id:String){
      this.appTpltService.deleAppTplt(id)
      .subscribe(
        (response) => {  this.apptplt = response;
        },
        (error) => {     this.errorMessage = error;   
        }
      );
      this.router.navigate(['/apptplts/list']);
    }
}
