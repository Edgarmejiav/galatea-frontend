import { Component, OnInit } from '@angular/core';
import { TipoModel } from 'src/app/models/tipo.model';
import { GalateaService } from 'src/app/services/galatea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tipostable',
  templateUrl: './tipostable.component.html',
  styleUrls: ['./tipostable.component.css']
})
export class TipostableComponent implements OnInit {
  tipo = new TipoModel();
  tipos: any[] = [];
  constructor(private servicio: GalateaService) { 
    this.obtenerTipos();
  }

  ngOnInit(): void {
  }

  obtenerTipos() {
    this.servicio.getTipos().subscribe(data => {
      this.tipos = data[1];
      console.log(data);
    });
  }

  eliminarTipo(tipo: TipoModel, i: any) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${tipo.descripcion}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminaTipos(tipo._id).subscribe();
        this.tipos.splice(i, 1);
      }     
    });
     }
}
