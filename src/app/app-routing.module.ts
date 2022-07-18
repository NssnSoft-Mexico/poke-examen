import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePokComponent } from '../componentes/detalle-pok/detalle-pok.component';
import { VistaPokComponent } from '../componentes/vista-pok/vista-pok.component';
import { HomeComponent } from '../componentes/home/home.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: VistaPokComponent},
  {path: 'pokeDetail/:id', component: DetallePokComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
