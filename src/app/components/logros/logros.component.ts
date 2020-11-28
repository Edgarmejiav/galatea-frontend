import { Component, OnInit } from '@angular/core';
import { GalateaService } from 'src/app/services/galatea.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logros: any []=[];
  constructor(public servicio: GalateaService) {
    this.getLogros();
   }

  ngOnInit(): void {
  }
  getLogros() {
    
    this.servicio.getLogros().subscribe(data => {
      this.logros = data[1];
      console.log(data);
    });

  }
}
