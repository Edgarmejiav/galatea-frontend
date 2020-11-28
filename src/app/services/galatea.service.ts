import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/// MODELOS
import { PesonaModel } from '../models/persona.model';
import { TipoModel } from '../models/tipo.model';
@Injectable({
  providedIn: 'root'
})
export class GalateaService {
 
  constructor(private http: HttpClient) {
    console.log("service listo");
  }


  getQuuery(query: string) {
    const url = `https://galateaarte.herokuapp.com/api/${query}`
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmFhZmFiOGY5OTI2NjQ2Mzg5ZDg4ZGYiLCJpYXQiOjE2MDY1ODM1NDgsImV4cCI6MTYwNjYyNjc0OH0.iPmOY8gdMQbgW1w2l-THH5_ahKtd3U4R_p5LYc9q4Pc'
    });

    return this.http.get(url, { headers });
  }

  postQuuery(query: string, model: any) {

    const url = `https://galateaarte.herokuapp.com/api/${query}`
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmFhZmFiOGY5OTI2NjQ2Mzg5ZDg4ZGYiLCJpYXQiOjE2MDY1ODM1NDgsImV4cCI6MTYwNjYyNjc0OH0.iPmOY8gdMQbgW1w2l-THH5_ahKtd3U4R_p5LYc9q4Pc'
    });

    return this.http.post(url, model, { headers } );
  }
  putQuuery(query: string, model: any, id:any) {

    const url = `https://galateaarte.herokuapp.com/api/${query}/${id}`
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmFhZmFiOGY5OTI2NjQ2Mzg5ZDg4ZGYiLCJpYXQiOjE2MDY1ODM1NDgsImV4cCI6MTYwNjYyNjc0OH0.iPmOY8gdMQbgW1w2l-THH5_ahKtd3U4R_p5LYc9q4Pc'
    });

    return this.http.put(url, model, { headers });
  }
  deleteQuuery(query: string, id:any) {

    const url = `https://galateaarte.herokuapp.com/api/${query}/${id}`
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmFhZmFiOGY5OTI2NjQ2Mzg5ZDg4ZGYiLCJpYXQiOjE2MDY1ODM1NDgsImV4cCI6MTYwNjYyNjc0OH0.iPmOY8gdMQbgW1w2l-THH5_ahKtd3U4R_p5LYc9q4Pc'
    });

    return this.http.delete(url,  { headers });
  }
  getByIDQuuery(query:string,  id:any ) {
    const url = `https://galateaarte.herokuapp.com/api/buscar/coleccion/${query}/id/${id}`
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmFhZmFiOGY5OTI2NjQ2Mzg5ZDg4ZGYiLCJpYXQiOjE2MDY1ODM1NDgsImV4cCI6MTYwNjYyNjc0OH0.iPmOY8gdMQbgW1w2l-THH5_ahKtd3U4R_p5LYc9q4Pc'
    });

    return this.http.get(url, { headers });
  }

  getByID(coleccion:string, id: any):Observable<any> {
    return this.getByIDQuuery(coleccion, id).
      pipe(map(data => {
        return Object.values(data);
      }));
  }
  /******************************PERSONA ************************************/
  crearPersona(persona: PesonaModel) {
    return this.postQuuery('personas', persona).
    pipe(map(data => {
      return Object.values(data);
    }));
  }

  getPersonas():Observable<any> {
    return this.getQuuery('personas').
      pipe(map(data => {
        return Object.values(data);
      }));
  }
  eliminaPersonas(id:any):Observable<any> {
    return this.deleteQuuery('personas', id);
  }
  actualizarPersonas(persona: PesonaModel, id: any): Observable<any> {
    
    const personaTem= { 
      ...persona
    }
    delete personaTem._id;
    return this.putQuuery('personas',personaTem, id);
  }

  /******************************PRESENTACION ************************************/

  getPresentaciones():Observable<any> {
 
    return this.getQuuery('presentaciones').
      pipe(map(data => {
        return Object.values(data);
      }));
  }

    /******************************TIPOS ************************************/

    crearTipos(tipo: TipoModel) {
      return this.postQuuery('tiposP', tipo).
      pipe(map(data => {
        return Object.values(data);
      }));
    }
  
    getTipos():Observable<any> {
      return this.getQuuery('tiposP').
        pipe(map(data => {
          return Object.values(data);
        }));
    }
    eliminaTipos(id:any):Observable<any> {
      return this.deleteQuuery('tiposP', id);
    }
    actualizarTipos(tipo: TipoModel, id: any): Observable<any> {
      
      const tipostem= { 
        ...tipo
      }
      delete tipostem._id;
      return this.putQuuery('tiposP',tipostem, id);
    }

      /******************************lOGROS ************************************/

  getLogros():Observable<any> {
   
    return this.getQuuery('logros').
      pipe(map(data => {
        return Object.values(data);
      }));
  }

  getImgPersona():Observable<any>{
    return this.getQuuery('upload/personas/get/5fab00842d65f60c14a76921').
      pipe(map(data => {
        return Object.values(data);
      }));
  }


}
