import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './libros/libros.component';
import { AddlibrosComponent } from './addlibros/addlibros.component';
import { EditarlibrosComponent } from './editarlibros/editarlibros.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    AddlibrosComponent,
    EditarlibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
