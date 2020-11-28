import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TipoModel } from 'src/app/models/tipo.model';
import { GalateaService } from 'src/app/services/galatea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipos-formulario',
  templateUrl: './tipos-formulario.component.html',
  styleUrls: ['./tipos-formulario.component.css']
})
export class TiposFormularioComponent implements OnInit {

  tipo = new TipoModel();
  tipos: any[] = [];
  constructor(private servicio: GalateaService,
    private route: ActivatedRoute) {
    
     }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !=="nuevo") {
      this.servicio.getByID("tipos", id).subscribe(data=> {
        this.tipo = data[1];
        this.tipo._id = data[1]._id;
         console.log(data);
      })
    }

  }
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario invalido');
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      allowOutsideClick: false
    });
    Swal.showLoading();
    let peticion: Observable<any>;

    if (this.tipo._id) {
      console.log("act")
      peticion = this.servicio.actualizarTipos(this.tipo, this.tipo._id);
      peticion.subscribe(data => {
        Swal.fire({
          title: `${this.tipo.descripcion}`,
          text: 'Se actualizó correctamente',
        });
        //this.tipo._id = data[1]._id;
        
    });
    } else {
      peticion = this.servicio.crearTipos(this.tipo);
      console.log("crear")
      peticion.subscribe(data => {
        Swal.fire({
          title: `${this.tipo.descripcion}`,
          text: 'Se actualizó correctamente',
        });
        this.tipo._id = data[1]._id;
        
    });
    }
   
  
  }
}
