import { Component, OnInit } from '@angular/core';
import { GalateaService } from 'src/app/services/galatea.service';

@Component({
  selector: 'app-cortos',
  templateUrl: './cortos.component.html',
  styleUrls: ['./cortos.component.css']
})
export class CortosComponent implements OnInit {
  cortometrajes: any = [];
  constructor(public servicio: GalateaService) {
    this.getCortos();
   }

  ngOnInit(): void {
  }
  getCortos() {
    
    /*this.servicio.getCortometrajes().subscribe(data => {
      this.cortometrajes = data[1];
      console.log(data);
    });*/

  }
}
