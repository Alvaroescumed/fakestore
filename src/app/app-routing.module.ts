import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path: 'store', component: TiendaComponent},
  { path: 'store/:category', component: TiendaComponent },
  { path: 'product/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
