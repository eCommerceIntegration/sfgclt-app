import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { AppOpt } from '../model/appopt';
import { AppOptService } from '../services/appopt.service';

@Component({
  selector: 'app-appopt-form',
  templateUrl: './appopt-form.component.html',
  styleUrls: ['./appopt-form.component.css']
})
export class AppOptFormComponent implements OnInit {
  appopt:AppOpt ;
  appopts:AppOpt[];
  id: String |null  ;
  regAppOpt: String |null  ;
  //Gestion de imagenes
  imgSrc: string;
  icoSrc: string;
  archivos: any = []
  loading: boolean

  constructor(
    private route: ActivatedRoute, 
    private sanitizer: DomSanitizer,
    private router: Router, 
    private appOptService: AppOptService ) 
    {
      this.appopt = new AppOpt();  } 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
        if (params.has("appopt.id")) {
          this.appOptService.findAppOpt(params.get("appopt.id")).subscribe(appopt =>this.appopt = appopt);
          this.regAppOpt = this.appopt.id;
        } 
        if (params.has("id")) {
          this.id = params.get("id")!;
          this.appopt.id = params.get("id")!;
        } 
      }) 
  }
  onSubmit() {
    this.appOptService.saveAppOpt(this.appopt)
    .subscribe(data => {      });
    if (this.regAppOpt!== null)
    {this.gotoAppOptList(); } else
    {this.router.navigate(["/appopts",'list']);}  
    }

    catchFile(event: any) {
      const archivoCapturado = event.target.files[0]
      this.extraerBase64(archivoCapturado).then((imagen: any) => {
        this.imgSrc = imagen.base;
    //    console.log(imagen);
    })
      this.archivos.push(archivoCapturado)
      // 
      // console.log(event.target.files); 
    }

    clearFile(): any {
      this.imgSrc = '';
      this.archivos = [];
    }

    upLoadFile(): any {
      console.log('Respuesta del servidor');
      try {
        this.loading = true;
        const formularioDeDatos = new FormData();
        this.archivos.forEach((archivo: string | Blob) => {
          formularioDeDatos.append('files', archivo)
                 this.loading = false;
        })
        // formularioDeDatos.append('_id', 'MY_ID_123')
/*        this.appOptService.postImage(`http://localhost:3001/upload`, formularioDeDatos)
          .subscribe(res => {
            this.loading = false;
        //    console.log('Respuesta del servidor', res);
  
          }, () => {
            this.loading = false;
            alert('Error');
          })
                this.appopt.optSrcIcon = this.archivos;
 */     } catch (e) {
        this.loading = false;
      //
      this.appopt.optSrcIcon = this.archivos;
      console.log('ERROR', e);
  
      } 
      this.appopt.optSrcIcon = this.archivos;
    }

    extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error => {
          resolve({
            base: null
          });
        };
        return null;
      } catch (e) {
        return null;
      }
    })

    gotoAppOptSave(id:String){
          this.appOptService.saveAppOpt(this.appopt).subscribe(data => {
          });
          this.router.navigate(["/appopts",'list']);
    }
    gotoAppOptList() {
      this.appOptService.listAppOpts().subscribe(data => {
        this.appopts = data;
      });
      this.router.navigate(["/appopts",'list']);
    }
    gotoAppOptEdit(id:String){
      this.router.navigate(["/appopts",id, 'edit']);
    }
    gotoAppOptDelete(id:String){
        this.appOptService.deleAppOpt(id).subscribe(data => {
        });
        this.router.navigate(["/appopts",'list']);
    } 
}
