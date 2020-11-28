import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GalateaService } from 'src/app/services/galatea.service';
import { PesonaModel } from '../../models/persona.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  persona = new PesonaModel();
  personas: any[] = [];
  constructor(private servicio: GalateaService) { 
    this.obtenerPersonas();
  }

  ngOnInit(): void {
  }
  obtenerPersonas() {
    this.servicio.getPersonas().subscribe(data => {
      this.personas = data[1];
      console.log(data);
    });
  }

  eliminarPersona(persona: PesonaModel, i: any) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${persona.nombres}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminaPersonas(persona._id).subscribe();
        this.personas.splice(i, 1);
      }     
    });
  }



}
