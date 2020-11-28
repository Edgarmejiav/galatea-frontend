import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GalateaService } from 'src/app/services/galatea.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { PesonaModel } from '../../models/persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  persona = new PesonaModel();
  personas: any[] = [];
  constructor(private servicio: GalateaService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !=="nuevo") {
      this.servicio.getByID("personas", id).subscribe(data=> {
        this.persona = data[1];
        this.persona._id = data[1]._id;
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

    if ( this.persona._id) {
      peticion = this.servicio.actualizarPersonas(this.persona, this.persona._id);
      peticion.subscribe( data => {
        Swal.fire({
          title: `${this.persona.nombres} ${this.persona.apellidoPaterno}`,
          text: 'Se actualizó correctamente',
        });
      });
  
    } else {
      peticion = this.servicio.crearPersona(this.persona);
         peticion.subscribe( data => {
        Swal.fire({
          title: `${this.persona.nombres} ${this.persona.apellidoPaterno}`,
          text: 'Se actualizó correctamente',
        });
        this.persona._id = data[1]._id;
      });
  
    }

  /*  this.servicio.crearPersona(this.persona).
      subscribe(resp => {
        console.log(resp);
      this.persona = resp;
      });
    */
     
  }

  

}
