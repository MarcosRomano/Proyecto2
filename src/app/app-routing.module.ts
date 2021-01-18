import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrosComponent } from './libros/libros.component';
import { AddlibrosComponent } from './addlibros/addlibros.component';
import { EditarlibrosComponent } from './editarlibros/editarlibros.component';

const routes: Routes = [
  { path: 'libros' , component: LibrosComponent},
  { path: 'addlibros', component: AddlibrosComponent},
  { path: 'editarlibros/:id', component: EditarlibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
