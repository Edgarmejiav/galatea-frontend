import { Component, OnInit } from '@angular/core';
import { GalateaService } from 'src/app/services/galatea.service';
@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {
  personas: any = [];
  constructor(public servicio: GalateaService) { 
    servicio.getPersonas().subscribe(data => {
      this.personas = data[1];
      //console.log(data);
    });

  
  }

  ngOnInit(): void {
  }

}
