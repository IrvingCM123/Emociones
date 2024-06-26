import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Tema1Component } from './tema1/tema1.component';
import { TemaPrincipalComponent } from './tema-principal/tema-principal.component';
import { EncuestaComponent } from './encuesta/encuesta.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'tema1', component: TemaPrincipalComponent},
  { path: 'tema2', component: TemaPrincipalComponent},
  { path: 'Conciencia emocional', component: Tema1Component},
  { path: 'Regulación emocional', component: Tema1Component},
  { path: 'Autonomía emocional', component: Tema1Component},
  { path: 'Competencias social', component: Tema1Component},
  { path: 'Habilidades para la vida y el bienestar', component: Tema1Component},
  { path: 'Conciencia emocional.', component: Tema1Component},
  { path: 'Regulación emocional.', component: Tema1Component},
  { path: 'Autonomía emocional.', component: Tema1Component},
  { path: 'Competencias social.', component: Tema1Component},
  { path: 'Habilidades para la vida y el bienestar.', component: Tema1Component},
  { path: 'Bisquerra', component: TemaPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
