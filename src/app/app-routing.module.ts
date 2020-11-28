import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CortosComponent } from './components/cortos/cortos.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { HomeComponent } from './components/home/home.component';
import { LogrosComponent } from './components/logros/logros.component';
import { PersonasComponent } from './components/personas/personas.component';

import { PresentacionesComponent } from './components/presentaciones/presentaciones.component';
import { TiposFormularioComponent } from './components/tipos/tipos-formulario/tipos-formulario.component';
import { TipostableComponent } from './components/tipos/tipostable/tipostable.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'logros', component: LogrosComponent },
  { path: 'cortos', component: CortosComponent },
  { path: 'presentaciones', component: PresentacionesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'personas', component: FormPersonaComponent },
  { path: 'persona/:id', component: PersonasComponent },
  { path: 'tipos', component: TipostableComponent },
  { path: 'tipo/:id', component: TiposFormularioComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
