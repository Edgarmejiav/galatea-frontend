import { Component, OnInit } from '@angular/core';
import { GalateaService } from 'src/app/services/galatea.service';

@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit {
  presentaciones: any = [];
  arr: any = [];
  constructor(public servicio: GalateaService) { 
    this.getpresentaciones();
  }

  getpresentaciones() {
    
    this.servicio.getPresentaciones().subscribe(data => {
      this.presentaciones = data[1];
     
      console.log(data);
    });
    
  }
  ngOnInit(): void {
  }

}
