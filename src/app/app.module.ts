import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LogrosComponent } from './components/logros/logros.component';
import { CortosComponent } from './components/cortos/cortos.component';
import { PresentacionesComponent } from './components/presentaciones/presentaciones.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { HttpClientModule } from '@angular/common/http';
import { GalateaService } from './services/galatea.service';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TiposFormularioComponent } from './components/tipos/tipos-formulario/tipos-formulario.component';
import { TipostableComponent } from './components/tipos/tipostable/tipostable.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LogrosComponent,
    CortosComponent,
    PresentacionesComponent,
    ContactoComponent,
    ConocenosComponent,
    FormPersonaComponent,
    PersonasComponent,
    TiposFormularioComponent,
    TipostableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [GalateaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
